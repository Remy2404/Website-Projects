
const CACHE_NAME = 'offline-cache-v1';
const urlsToCache = [
    '/',
    '/task2.html',
    '/styles.css',
    '/script.js',
    'https://www.youtube.com/embed/M1mnXktLBuI'
];

// Install service worker and cache the necessary files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch resources from the cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});
