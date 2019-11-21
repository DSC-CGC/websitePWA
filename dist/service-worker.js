<<<<<<< HEAD
importScripts("/precache-manifest.b8fe209b6d0863bea49364ebca669c41.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
=======
importScripts("/precache-manifest.93a071b75f798b310b64e59099ea9c87.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
>>>>>>> dbf766e8155ea47cabcf68f37ba19875bb544ff3

self.addEventListener('message', (e) => {
    if (!e.data) {
      return;
    }

    switch (e.data) {
      case 'skipWaiting':
        self.skipWaiting();
        break;
      default:
        // NOOP
        break;
    }
  });

  workbox.clientsClaim();

  // The precaching code provided by Workbox.
  self.__precacheManifest = [].concat(self.__precacheManifest || []);
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
