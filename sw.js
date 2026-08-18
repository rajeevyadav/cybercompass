/* CyberCompass service worker.
   Goal: install/offline support (D-001 §2) WITHOUT ever serving stale
   regulatory content to an online user.

   Strategy:
   - Page navigations → NETWORK-FIRST. An online visitor always gets the
     latest directive-verified index.html; the cache is only a fallback when
     offline. This matters: content here is directive-gated and must not go
     stale silently.
   - Static assets (icons, manifest) → CACHE-FIRST (they rarely change; bump
     CACHE below if they do).
   - External requests (the primary-source citation links) are never
     intercepted — they pass straight through to the network.

   Bump CACHE whenever the cached asset list changes. */
const CACHE = 'cybercompass-v1';
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon.svg',
  'pwa-icon.svg',
  'pwa-icon-192.png',
  'pwa-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Only handle our own origin; let external citation links go to the network.
  if (url.origin !== self.location.origin) return;

  // Network-first for navigations (always prefer fresh, verified content online).
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Cache-first for static same-origin assets.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
