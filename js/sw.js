/* ------------ INSTALL EVENT ------------ */
self.addEventListener('install', function(event) {
  var UrlsToCache = [
    '/',
    '/css/',
    '/js/',
    '/img/'
  ];
  event.waitUntil(
    caches.open('restaurant-cache')
    .then(function(cache) {
      return cache.addAll(UrlsToCache);
    })
    .catch(function(data) {
      console.log(data);
    })
  );
});
/* ------------ FETCH EVENT ------------ */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      alert(response);
      if (response) return response;
      return fetch(event.request);
    })
    .catch(function(data) {
      console.log(data);
    })
  )
});
