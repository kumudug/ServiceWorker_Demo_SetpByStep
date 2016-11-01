"use strict";

(function () {
    if ('serviceWorker' in navigator) {

        console.log('service worker api is present');

        navigator.serviceWorker.register('/sw.js').then(function (reg) {

            if (reg.installing) {
                console.log('New versioni installing...');
            } else if (reg.waiting) {
                console.log('New version available to install...');
            } else if (reg.active) {
                console.log('Service worker active');
            }

        }).catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });

    } else {
        console.log('service worker api is not present in the browser');
    }

})();








