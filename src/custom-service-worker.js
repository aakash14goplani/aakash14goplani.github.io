/* eslint-disable no-undef */

if ('serviceWorker' in navigator) {
  self.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    console.log('Service Worker: beforeinstallprompt', e);
    const deferredPrompt = e;
    openCreatePostModal(deferredPrompt);
    return false;
  });

  /**
   * Install the service worker and cache the static assets
   */
  self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed', e);
    /* e.waitUntil(
      caches.open(CACHE_STATIC_NAME).then((cache) => {
        cache.addAll(STATIC_ASSETS);
      })
    ); */
  });

  /**
   * Activate the service worker and clear old caches
   */
  self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated', e);
    /* e.waitUntil(
      caches.keys().then(cacheNames => Promise.all(cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_STATIC_NAME && cacheName !== CACHE_DYNAMIC_NAME) {
          return caches.delete(cacheName);
        }
      })))
    ); */
    return self.clients.claim();
  });

  /**
   * Fetch the data from the network and cache it
   */
  self.addEventListener('fetch', (event) => {
    /* event.respondWith(
      miscellaneousStrategies(event)
    ); */
  });
}

/**
 * display banner message for installing PWA
 */
function openCreatePostModal(deferredPrompt) {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === 'dismissed') {
        console.log('User cancelled installation');
      } else {
        console.log('User added to home screen');
      }
    });

    deferredPrompt = null;
  }

  // unregisterServiceWorker();
}

// unregister service worker
function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(function (registrations) {
        for (let i = 0; i < registrations.length; i++) {
          registrations[i].unregister();
        }
      });
  }
}
