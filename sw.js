var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/try-service-worker/',
  '/try-service-worker/styles/bootstrap.css',
  '/try-service-worker/scripts/jquery.js',
  '/try-service-worker/scripts/bootstrap.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
