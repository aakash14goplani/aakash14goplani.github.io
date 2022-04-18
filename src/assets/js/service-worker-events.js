/* eslint-disable no-undef */

/**
 * @description This files handles custom events of service worker like - beforeinstallprompt, install,
 * activate etc.
 * We are doing this externally because as of 04/18/2022 there is no other way to do that
 * One way was to improt ngsw-worker.js using importScripts but that was not working. We were getting
 * reference error using that code
 */

let deferredPrompt;
let directionsButton = document.querySelector('#toggle_app_directions');
let installAppButton = document.querySelector('#install_pwa_button');

// wait for 20s till DOM is stable
setTimeout(() => triggerAppInstallationFlow(), 20000);

window.addEventListener('beforeinstallprompt', function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  triggerAppInstallationFlow();
});

window.addEventListener('appinstalled', () => {
  // Hide the app-provided install promotion
  hideInstallPromotion();
  // Clear the deferredPrompt so it can be garbage collected
  deferredPrompt = null;
  // Optionally, send analytics event to indicate successful install
});

function triggerAppInstallationFlow() {
  directionsButton = document.querySelector('#toggle_app_directions');
  installAppButton = document.querySelector('#install_pwa_button');

  if (deferredPrompt && directionsButton && installAppButton) {
    showAddToHomeScreen();
  } else {
    hideInstallPromotion();
  }
}

function showAddToHomeScreen() {
  directionsButton.style.display = 'none';
  installAppButton.style.display = 'block';
  installAppButton.addEventListener('click', addToHomeScreen);
}

function addToHomeScreen() {
  deferredPrompt.prompt(); // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then(function (choiceResult) {
      if (choiceResult.outcome === 'accepted') {
        deferredPrompt = null;
        hideInstallPromotion();
      } else {
        // User dismissed the prompt
      }
    });
}

function hideInstallPromotion() {
  if (directionsButton && installAppButton) {
    directionsButton.style.display = 'block';
    installAppButton.style.display = 'none';
  }
}

/**
 * Install the service worker and cache the static assets
 */
window.addEventListener('install', (e) => { });

/**
 * Activate the service worker and clear old caches
 */
window.addEventListener('activate', (e) => { });

/**
 * Fetch the data from the network and cache it
 */
window.addEventListener('fetch', (event) => { });
