"use strict";

var CACHE_NAME = 'sv-cache-v01';

self.addEventListener("install", (ev) => {
    console.log('Installing version - ' + CACHE_NAME);
    // Perform install steps
    ev.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
            //return cache.addAll(urlsToCache);
        }));
});