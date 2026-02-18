import type { Context, Config } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {
  const acceptHeader = req.headers.get("Accept") || "";

  if (!acceptHeader.includes("text/markdown")) {
    return context.next();
  }

  const response = await context.next();
  const html = await response.text();

  const markdown = htmlToMarkdown(html);

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};

function htmlToMarkdown(html: string): string {
  // Remove everything outside the body
  let body = html;
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    body = bodyMatch[1];
  }

  // Remove script and style tags and their content
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  body = body.replace(/<style[\s\S]*?<\/style>/gi, "");
  body = body.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  // Remove SVG elements
  body = body.replace(/<svg[\s\S]*?<\/svg>/gi, "");
  // Remove image tags (not useful in text-only markdown)
  body = body.replace(/<img[^>]*>/gi, "");

  // Convert headings
  body = body.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, content) => `# ${stripTags(content).trim()}\n\n`);
  body = body.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, content) => `## ${stripTags(content).trim()}\n\n`);
  body = body.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, content) => `### ${stripTags(content).trim()}\n\n`);
  body = body.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, content) => `#### ${stripTags(content).trim()}\n\n`);
  body = body.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, (_, content) => `##### ${stripTags(content).trim()}\n\n`);
  body = body.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, (_, content) => `###### ${stripTags(content).trim()}\n\n`);

  // Convert links - preserve href
  body = body.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const linkText = stripTags(text).trim();
    if (!linkText) return "";
    // Skip fragment-only links and javascript links
    if (href.startsWith("#") || href.startsWith("javascript:")) return linkText;
    return `[${linkText}](${href})`;
  });

  // Convert strong/bold
  body = body.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, content) => `**${stripTags(content).trim()}**`);

  // Convert emphasis/italic
  body = body.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, content) => `*${stripTags(content).trim()}*`);

  // Convert inline code
  body = body.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, content) => `\`${decodeEntities(stripTags(content).trim())}\``);

  // Convert pre/code blocks
  body = body.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, content) => {
    return `\n\`\`\`\n${decodeEntities(stripTags(content).trim())}\n\`\`\`\n\n`;
  });
  body = body.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, content) => {
    return `\n\`\`\`\n${decodeEntities(stripTags(content).trim())}\n\`\`\`\n\n`;
  });

  // Convert unordered lists
  body = body.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return items.map((item: string) => {
      const text = stripTags(item.replace(/<li[^>]*>([\s\S]*?)<\/li>/i, "$1")).trim();
      return `- ${text}`;
    }).join("\n") + "\n\n";
  });

  // Convert ordered lists
  body = body.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, content) => {
    const items = content.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
    return items.map((item: string, i: number) => {
      const text = stripTags(item.replace(/<li[^>]*>([\s\S]*?)<\/li>/i, "$1")).trim();
      return `${i + 1}. ${text}`;
    }).join("\n") + "\n\n";
  });

  // Convert blockquotes
  body = body.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    const text = stripTags(content).trim();
    return text.split("\n").map((line: string) => `> ${line}`).join("\n") + "\n\n";
  });

  // Convert paragraphs
  body = body.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, content) => {
    const text = content.trim();
    if (!text) return "";
    return `${text}\n\n`;
  });

  // Convert line breaks
  body = body.replace(/<br\s*\/?>/gi, "\n");

  // Convert horizontal rules
  body = body.replace(/<hr[^>]*\/?>/gi, "\n---\n\n");

  // Strip all remaining HTML tags
  body = stripTags(body);

  // Decode HTML entities
  body = decodeEntities(body);

  // Clean up excessive whitespace
  body = body.replace(/\n{3,}/g, "\n\n");
  body = body.trim();

  return body + "\n";
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&nbsp;/g, " ");
}

export const config: Config = {
  path: "/*",
  excludedPath: ["/api/*", "/_next/*", "/images/*", "/favicon.svg", "/*.css", "/*.js", "/*.json", "/*.ico", "/*.png", "/*.jpg", "/*.svg", "/*.woff", "/*.woff2"],
};
