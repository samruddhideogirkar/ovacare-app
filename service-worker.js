const CACHE_NAME = "ovacare-cache-v1";
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/periodtracker.html',
  '/pcod-test.html',
  '/assets/logo.png',
  '/assets/background.png',
  '/icon-192.png',
  '/icon-512.png',
  '/screenshot1.png',
  '/dashboard.css',
  '/dashboard.js',
  // Add other important files here
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


self.addEventListener('periodicsync', event => {
  if (event.tag === 'syncData') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Your data sync logic here
}
