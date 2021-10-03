'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7bd2af5483f310a70095f486135e1e84",
"assets/assets/bomb.gif": "1fc142ff99f799726b486f1264a4af6a",
"assets/assets/comic.jpg": "35edc7603ee62863d253d1e4c167a1db",
"assets/assets/fire.gif": "4f27a9ee1674abac5572e3dd221614e0",
"assets/assets/fireworks.gif": "a7128f2c657591d27a6c9eee365df80d",
"assets/assets/FSxN.gif": "04456b27ea8af88b3751d64a256ee825",
"assets/assets/maha_images/1.jpg": "22744f38e5fc6dc2920e6ccdeb8fd79d",
"assets/assets/maha_images/10.jpg": "09f2745ac7b7d28cb35d0b074ffc420f",
"assets/assets/maha_images/11.jpg": "be0cbe5f99cc917527ff46c18eaeeabd",
"assets/assets/maha_images/12.jpg": "f3e09a02604ba48dd68879288df3998f",
"assets/assets/maha_images/13.jpg": "757cafd05390b23e4b37443c759d54f8",
"assets/assets/maha_images/14.jpg": "2f24efc06d37bda0c71c2dc768002135",
"assets/assets/maha_images/15.jpg": "ae12042d7a650a781c5334ff0928670e",
"assets/assets/maha_images/16.jpg": "ff811563d36c2c818cdfbe01ba8f9e9f",
"assets/assets/maha_images/17.jpg": "ad9bbfbb60cf28686125ca490b388083",
"assets/assets/maha_images/18.jpg": "ab9453f44dae69e5c6a72c1d911e7d70",
"assets/assets/maha_images/19.jpg": "b4f95ae444f1c31e4902802e69ef1eac",
"assets/assets/maha_images/2.jpg": "df9972f1a92c83042215a63802c5e8eb",
"assets/assets/maha_images/20.jpg": "194c5ae2fd832eeb5a71a384c99bd85c",
"assets/assets/maha_images/21.jpg": "d244effa6ca12e98675e8c70a53daed2",
"assets/assets/maha_images/3.jpg": "cd5a78d3696980fc781ed2d3c7056d09",
"assets/assets/maha_images/4.jpg": "45e688299cec2f93a5056b8fb1750aa1",
"assets/assets/maha_images/5.jpg": "423d07276831a5644a6d40f29f2da209",
"assets/assets/maha_images/6.jpg": "fbc40db6bc650c0915fbb2f2cdca456e",
"assets/assets/maha_images/7.jpg": "bb43903735d96189610e4bd5b820960f",
"assets/assets/maha_images/8.jpg": "3305fde04da42b685a7b07fb1a9083a1",
"assets/assets/maha_images/9.jpg": "c39c7c377a6fa79b0c338e51a659e974",
"assets/FontManifest.json": "3b6778322ddc7989e63b129563524db6",
"assets/fonts/Changa-VariableFont_wght.ttf": "a1409fdeb101b0ae4569b1e0d4ff3c33",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c35fe67b7f2e001875b0a93a413a30c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1490f04a92fe4c1710829589804489bf",
"/": "1490f04a92fe4c1710829589804489bf",
"main.dart.js": "8d544e8533309120b2731740d4d4ec36",
"manifest.json": "cfd0d9a3b65e119601c7ed888dfbaa13",
"version.json": "57ae56e91ea19f4d4d64ea8d5e1f9d88"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
