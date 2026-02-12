import TurndownService from "https://esm.sh/turndown?target=deno";

const estimateTokens = (text) => {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};

const mergeVary = (existing, value) => {
  const set = new Set();
  if (existing) {
    for (const part of existing.split(",")) {
      const trimmed = part.trim();
      if (trimmed) set.add(trimmed.toLowerCase());
    }
  }
  set.add(value.toLowerCase());
  return Array.from(set).join(", ");
};

const stripNonContent = (html) => {
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  content = content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  content = content.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  content = content.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, "");
  content = content.replace(/<template\b[^>]*>[\s\S]*?<\/template>/gi, "");

  return content;
};

const toMarkdown = (html) => {
  const service = new TurndownService({
    codeBlockStyle: "fenced",
    headingStyle: "atx"
  });
  return service.turndown(stripNonContent(html));
};

export default async (request, context) => {
  const accept = request.headers.get("accept")?.toLowerCase() ?? "";
  if (!accept.includes("text/markdown")) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("text/html")) {
    return response;
  }
  const contentEncoding = response.headers.get("content-encoding");
  if (contentEncoding && contentEncoding.toLowerCase() !== "identity") {
    return response;
  }

  const html = await response.text();
  const markdown = toMarkdown(html);
  const tokenCount = estimateTokens(markdown);

  const headers = new Headers();
  const cacheControl = response.headers.get("cache-control");
  if (cacheControl) headers.set("cache-control", cacheControl);
  const contentLanguage = response.headers.get("content-language");
  if (contentLanguage) headers.set("content-language", contentLanguage);

  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("vary", mergeVary(response.headers.get("vary"), "accept"));
  headers.set("x-markdown-tokens", String(tokenCount));
  headers.set("content-signal", "ai-train=yes, search=yes, ai-input=yes");

  return new Response(markdown, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};

export const config = {
  path: "/*"
};
