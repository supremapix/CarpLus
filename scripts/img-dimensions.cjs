const fs = require('fs');
const path = require('path');

function readUInt24LE(buf, off) {
  return buf[off] | (buf[off + 1] << 8) | (buf[off + 2] << 16);
}

function getWebpSize(buf) {
  // RIFF....WEBP
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const format = buf.toString('ascii', 12, 16);
  if (format === 'VP8 ') {
    // lossy
    const w = buf.readUInt16LE(26) & 0x3fff;
    const h = buf.readUInt16LE(28) & 0x3fff;
    return { w, h };
  } else if (format === 'VP8L') {
    // lossless
    const b = buf.readUInt32LE(21);
    const w = (b & 0x3fff) + 1;
    const h = ((b >> 14) & 0x3fff) + 1;
    return { w, h };
  } else if (format === 'VP8X') {
    // extended
    const w = readUInt24LE(buf, 24) + 1;
    const h = readUInt24LE(buf, 27) + 1;
    return { w, h };
  }
  return null;
}

function getPngSize(buf) {
  if (buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function getJpgSize(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let off = 2;
  while (off < buf.length) {
    if (buf[off] !== 0xff) { off++; continue; }
    const marker = buf[off + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const h = buf.readUInt16BE(off + 5);
      const w = buf.readUInt16BE(off + 7);
      return { w, h };
    }
    const len = buf.readUInt16BE(off + 2);
    off += 2 + len;
  }
  return null;
}

function getSize(file) {
  const buf = fs.readFileSync(file);
  const ext = path.extname(file).toLowerCase();
  if (ext === '.webp') return getWebpSize(buf);
  if (ext === '.png') return getPngSize(buf);
  if (ext === '.jpg' || ext === '.jpeg') return getJpgSize(buf);
  return null;
}

function walk(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

const files = walk('public', []);
const result = {};
for (const f of files) {
  try {
    const size = getSize(f);
    const key = '/' + path.relative('public', f).split(path.sep).join('/');
    result[key] = size ? `${size.w}x${size.h}` : 'unknown';
  } catch (e) {
    result[f] = 'error:' + e.message;
  }
}
console.log(JSON.stringify(result, null, 2));
