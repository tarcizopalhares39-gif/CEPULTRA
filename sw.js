const CACHE_NAME = 'triagem-v1';

// Instala o motor e guarda a página na memória do celular
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json'
      ]);
    })
  );
});

// Faz o app carregar mais rápido buscando da memória
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
