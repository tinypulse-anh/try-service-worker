var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/bootstrap.css',
  '/scripts/jquery.js',
  '/scripts/bootstrap.js'
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
