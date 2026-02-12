import TurndownService from "https://esm.sh/turndown@7.2.0";

function extractMainContent(html) {
    // Remove doctype, comments, and XML declarations
    let content = html.replace(/<!DOCTYPE[^>]*>/gi, "");
    content = content.replace(/<!--[\s\S]*?-->/g, "");

    // Remove unwanted elements entirely (script, style, nav, footer, header, svg, iframe, etc.)
    const stripTags = [
        "script",
        "style",
        "noscript",
        "iframe",
        "svg",
        "nav",
        "footer",
        "header",
        "aside",
        "form",
        "button",
        "input",
        "select",
        "textarea",
    ];
    for (const tag of stripTags) {
        const regex = new RegExp(
            `<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`,
            "gi"
        );
        content = content.replace(regex, "");
        // Also remove self-closing versions
        content = content.replace(
            new RegExp(`<${tag}[^>]*\\/?>`, "gi"),
            ""
        );
    }

    // Try to extract <main> or <article> content first for cleaner output
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);

    if (mainMatch) {
        content = mainMatch[1];
    } else if (articleMatch) {
        content = articleMatch[1];
    } else {
        // Fall back to <body> content
        const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
            content = bodyMatch[1];
        }
    }

    return content;
}

function estimateTokenCount(text) {
    // Rough estimation: ~4 characters per token for English text, which is
    // a commonly used heuristic aligned with most LLM tokenizers
    return Math.ceil(text.length / 4);
}

export default async function markdownForAgents(req, context) {
    const acceptHeader = req.headers.get("accept") || "";

    // Only activate when the client explicitly requests text/markdown
    if (!acceptHeader.includes("text/markdown")) {
        return context.next();
    }

    // Get the original response from the origin/next handler
    const response = await context.next();

    // Only convert HTML responses
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
        return response;
    }

    const html = await response.text();

    // Extract meaningful content from the HTML
    const cleanedHtml = extractMainContent(html);

    // Convert HTML to Markdown using Turndown
    const turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        bulletListMarker: "-",
        emDelimiter: "_",
        strongDelimiter: "**",
        linkStyle: "inlined",
    });

    // Remove image elements since they don't translate well to agent consumption
    turndownService.addRule("remove-images", {
        filter: "img",
        replacement: function (content, node) {
            const alt = node.getAttribute("alt") || "";
            const src = node.getAttribute("src") || "";
            if (alt && src) {
                return `![${alt}](${src})`;
            }
            return "";
        },
    });

    let markdown;
    try {
        markdown = turndownService.turndown(cleanedHtml);
    } catch {
        // If conversion fails, return the original response
        return new Response(html, {
            status: response.status,
            headers: response.headers,
        });
    }

    // Clean up excessive whitespace
    markdown = markdown.replace(/\n{3,}/g, "\n\n").trim();

    const tokenCount = estimateTokenCount(markdown);

    return new Response(markdown, {
        status: response.status,
        headers: {
            "content-type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": String(tokenCount),
            "content-signal": "ai-train=yes, search=yes, ai-input=yes",
        },
    });
}

export const config = {
    path: "/*",
    excludedPath: ["/api/*", "/_next/*", "/favicon.ico"],
    onError: "fallback",
};
