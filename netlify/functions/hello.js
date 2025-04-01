export const config = {
  path: ["/hello", "/hello/*"]
};

export default async function handler(req, context) {
  const url = new URL(req.url);
  const numberMatch = url.pathname.match(/^\/hello\/test\/(\d+)$/);

  if (numberMatch) {
    const number = numberMatch[1];
    return new Response(`You accessed test with number: ${number}`, {
      headers: { 'content-type': 'text/plain' },
    });
  }

  if (url.pathname === '/hello/test') {
    return new Response('This is the test endpoint!', {
      headers: { 'content-type': 'text/plain' },
    });
  }

  return new Response('Hello, World!', {
    headers: { 'content-type': 'text/plain' },
  });
}

