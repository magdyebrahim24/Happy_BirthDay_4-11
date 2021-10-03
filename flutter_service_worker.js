'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "679192abb9c3661c42353b80ec3fb992",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4eea7dcc863e495057825e1b3ae3ba28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04eec78599500e1e13dce157ea1209d0",
".git/logs/refs/heads/main": "88526fec0a5d8385dac5772e5efce183",
".git/logs/refs/remotes/origin/main": "5b13d367d70dc70d6bd538ac36d6aeb2",
".git/objects/02/5ef84ef8003944484818460a79247525a36580": "eef50940617f68acbdefe49b7ab36e8c",
".git/objects/04/0d1dd2326f5e3f9f00a4578e33fe696d495442": "927ef2bdd895adbbe9cb18d191250635",
".git/objects/04/edd52766d558ade3ababb74582e519da2fc855": "a224a37620a5591f48fc096ecf24b13a",
".git/objects/05/57029f2c60090ca669eb35c20446732ec8c0ba": "debaaccc57c9799d50a5c8df5d59b70f",
".git/objects/08/c5b6100ac75959d502f0dbd1f63468bc7bd4d7": "103a6935eead9c9024c6e2c9e8d4b9a7",
".git/objects/0a/661ca94015a70addfd2b576da1a1f09f6eb7fe": "e9d9e953308bc47415409f47fa538fe2",
".git/objects/12/85b8552ac5ff58a36d584ecdbc0cb329a03767": "6145a3da677254a608809f93c34546d0",
".git/objects/14/13c92260c2fac689d0c9a64853fa279b9290bf": "4a1e25cd3c188ebe015fd492aaa11acc",
".git/objects/16/cb8b0233a819cdd74ba07e127fa5b95f5726aa": "b057b681eb3ba29b56a9d63704b1c585",
".git/objects/1e/1b015fd7d28af12d40044e32a295e57346a2fd": "fc435373e5fbe93f40ba7d2f4975edf3",
".git/objects/1f/c49213446b7bf50270433bb699d41e9cc40279": "25d8d4cbf85567e3635fb1920f23da30",
".git/objects/27/3e1cf18c9c143edcdf204893e409511ad085f5": "a64ef67e1d173c568ff978364942b0a7",
".git/objects/27/832fd52df629d32c0bef9e1e0a5dae3c107342": "2ceebb8520984697468b6d926903faac",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/ed553255452ca6ec8f6e7010f97c6acea10f2d": "a4b1eab1216800cf0352242a6a9a451a",
".git/objects/42/7424078da687069b043f0e1828a5fcf95c65da": "06a6a165354246030c6ff88f5a29f824",
".git/objects/4b/bc12b6a20369ca2f8c0c58026113083a7a2ecf": "39a2e434ecd20233136242d0c7562f8a",
".git/objects/4b/feebe13517d6d042c04bee3ea6b5a9578b5fab": "d8b0df6e007d73687b45fcb43ff229b5",
".git/objects/54/ee60438aeaca712ed2cc8614278ef996386648": "680c22ea7aad6d63d023f06cb514cc6d",
".git/objects/60/203b0299e24cd4b28817cfebc3c2731ba88c8d": "b41d3e8fe8e43f097e2ccfac4e1d2137",
".git/objects/61/771059235707e108335090ec54c55038ac079d": "822743ccb28529cddaeca729c646bfd5",
".git/objects/62/a3f73ebc6d868f94b9f803c95d9246b4cdb303": "60b14e5c2c75196831e9bbe89e330436",
".git/objects/63/732dd2934176e07e6ad5c482ea529dcbcc2b0c": "1225674254a6fdb3ad2197d562674962",
".git/objects/6a/201eb7ac0c042e85ff80639308b8f5e3657a4a": "83bdd549bba5fd0ac9de15a509f14386",
".git/objects/6f/f6bd3102705de43606dffd8e0290d3074e4d53": "13a35af21de487411f88780a52981284",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/30ad1954119856d1eb0dc447ab58147c9010a4": "a9821d157ef4cd6f88af41692082a89a",
".git/objects/7f/a81b65077534b3257c40deed58610f08f3a983": "3c3aff3e404ff6c6b81540f7d391d362",
".git/objects/84/e0b477a2335aebc93161e0111159c19e49b0dd": "6a86ef901cac937d6ae23e3d22a11c9b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a42060ea52bdc5d61a1b4b8f6badf07fa77179": "957cfa98f3dae00dc08e0c73b9ebcaca",
".git/objects/90/65400a66718bfb73a225cff2b68a51bfcb09a9": "ada2f95471e2e002ffe43c5bc7ac8f2d",
".git/objects/92/08fec2d6710e630cb894d8f8f0ef1229761f2c": "a2c65afefdb46c77c40a901abf44a31c",
".git/objects/96/76b19f3d13f658ac63054306de460bd02f79bf": "10abb0a81c4e03ec8eed226e8b35affb",
".git/objects/96/fad552e2282d1730a7c292752d1e4287fbe63e": "ae4bd8c563540beef113fbd86d63186d",
".git/objects/9e/4343669cb12463d49ae7887bb0a3c697c59a8e": "a1ad0b093b9cfda1c6e787aa5e98083c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/daa855bf65394333b446866c551565fae44b58": "7d2c9af5f921a66fe46bdb40363f9419",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/6e4e02122ae6b17dc26c49f579ec65e510eee5": "10c47e327d11e4705910af7fb4eca3a6",
".git/objects/af/407eab128b3066763db345e2cfaecbe5f1d1d7": "9e75fd70f382435fae0858f95bb75e8d",
".git/objects/b3/9854b8f01625b0fe515133e034c82fce472ffc": "50593fd8a45d0339110d0be7ba226070",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c3e029fc987a4e2990d96083d9b5d915346344": "e01181d0646efe586ed989123758ae71",
".git/objects/bb/138080d37515bab75586c9916d077202830218": "290080d10ec1cf084b37b42afc313fd9",
".git/objects/c1/1bb8b368f48f290f801b40f9bf9ae6942429ab": "9034054c8d729de5770b3fcae31533c2",
".git/objects/c1/8ba1cac1e930d7a4eba610d2015223331089fb": "fcbfd1902620f6e94f6800790d31b781",
".git/objects/c5/2af53ddccd2873e3dacc1e10c0175a94e05048": "b424e997afb9e490fc1d15bf3a98d5ce",
".git/objects/c5/4f0d251c82444d35cb2af49a0546a761534f41": "b13d1c2274555801c2ad6e2277366595",
".git/objects/c9/6bae6042c5b3af140391764ad322b8528bb1be": "5892cb09a17b37dfd23958d14764bcee",
".git/objects/cf/29edd62e8c2477dc1f01bcd531c585bcdd999d": "752cce643937cea7bd91ca72a6883e62",
".git/objects/d5/7c0b1872d3d53b4c769dc434f011bd4ed67e64": "fa61b2d0459700ff7c496a48d169e09a",
".git/objects/d6/2564691a37a64ad5671b15e75498e2e892e574": "fe13d48f321e01d47c67b749b94e76fb",
".git/objects/d6/7670566f10121159cb08efb84b1e64418e7e6d": "6ff680a0708bd84caee44fc4457b653c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/44fd96ba32fc7a5aae77fea8f704357e03366b": "f4c505119ad25c7d73716dd9da488147",
".git/objects/dd/450f97b01b74ab0cde07a24298f5f31ae2f359": "931149b864f86556681f74a96a287223",
".git/objects/dd/a1832b9f7478d5e3e2d1b357c08dcf5e4a5d6f": "ebc3aea02846065bd57d567471fd09cc",
".git/objects/e1/3d0752aee7eb195b9c9e38ef4b3776020ef2a6": "31c870d0ca3991bf61036db85fa24f4a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/c937c5aa59e19d616b0fee3bd390cdae2ec553": "132c3756b4e26baba83ec32237559d4d",
".git/objects/fa/ea97d98014367d385815bf400ad4657267f93f": "db106b1f5be902a0199086f51b11b347",
".git/objects/fa/fdec73e5f808e17084a2d32aa0b66783cb9fd6": "7de2711a5c0e47150d3a24064ad5cf04",
".git/objects/ff/ec988a564ae714ea420037e40371d5ce86640b": "d091ae53de4e6b4c458abbfacf3345be",
".git/refs/heads/main": "960013fdf1f111c4a2dc02db6446900f",
".git/refs/remotes/origin/main": "960013fdf1f111c4a2dc02db6446900f",
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
"index.html": "34623baaf0c982b946a015fa63944a01",
"/": "34623baaf0c982b946a015fa63944a01",
"main.dart.js": "dfa4182c152594af6d0bad2c0af5c905",
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
