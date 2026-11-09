// Minimal local-only development server: no dependencies required.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve(process.cwd());
const port = 5500;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (request.method !== 'GET') {
      response.writeHead(405); response.end('Method not allowed'); return;
    }
    const allowedPath = pathname === '/' ? '/app/index.html' : pathname;
    // Serve only the intentionally public application code.
    if (!allowedPath.startsWith('/app/') && !allowedPath.startsWith('/src/')) {
      response.writeHead(404); response.end('Not found'); return;
    }
    const filePath = resolve(root, '.' + decodeURIComponent(allowedPath));
    if (!filePath.startsWith(root + sep)) {
      response.writeHead(403); response.end('Forbidden'); return;
    }
    const content = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream' });
    response.end(content);
  } catch {
    response.writeHead(404); response.end('File not found');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`CampusDesk local workspace: http://127.0.0.1:${port}`);
});
