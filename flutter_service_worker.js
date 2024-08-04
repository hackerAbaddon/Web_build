'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d1d14530d0e03f5d8fd073f72791bb6f",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "ae94ea69fa715c116e95cbf65be3db93",
"/": "ae94ea69fa715c116e95cbf65be3db93",
"main.dart.js": "bfc491ef59253be8ae2a171f13ba0246",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "6ec78a4a149f85bf10a481e4afcc648e",
"assets/NOTICES": "969bc173a32dfc7db8bbb09d9334f0d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4b943b26a382b749faf8797efa7ce6de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "19a99953ef8f8428ad831d01f40845cd",
"assets/fonts/MaterialIcons-Regular.otf": "002c6444f6140572e637c657c145e33e",
"assets/assets/images/port.png": "ebcedf7bd99c08ed667a66b0aa93c6bc",
"assets/assets/images/back2.png": "bc560b0b4ad25264955b6984d8471f37",
"assets/assets/images/back3.png": "390811238568b0fb05083ff661caf23d",
"assets/assets/images/back1.png": "aeb1addee26aa5432d1d811b80147553",
"assets/assets/images/back4.png": "3657f5614140fd09a86e778cc2bb88bf",
"assets/assets/images/back5.png": "a198188c875b070abc4f93b62d2238e9",
"assets/assets/images/back6.png": "339fba2a1a8bc7beb5edd21a0e30b8fe",
"assets/assets/images/vinayak.jpg": "053fd4e4940320a37fa445478cb71da9",
"assets/assets/icons/email.png": "88492ab88c167bb8ec085edf1430db3e",
"assets/assets/icons/iosbattery.png": "e1b814a36f2daea47262a3b91b44f44f",
"assets/assets/icons/design.png": "d34bbab132e28b9034729c183bd216ce",
"assets/assets/icons/experience.png": "0c3fdfc115b016bdeac69119b7b161ff",
"assets/assets/icons/qrcode.png": "eb014267667a00afaae1a7a147762163",
"assets/assets/icons/instagram.png": "72a4b561233cbeed9b490e76dd57af83",
"assets/assets/icons/flutter.png": "6637b6c64481c76692760d0729b9c10a",
"assets/assets/icons/ioswifi.png": "3d183ac3a62b63c887d4dc7779d71091",
"assets/assets/icons/fb.png": "ad56565a45e2dc6b77cfff4e48176666",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/experience2.png": "6531c54089382d870ef48ae4d141dc6a",
"assets/assets/icons/hireme.png": "c7224addea3783bd7ee90f41d62f35cd",
"assets/assets/icons/iosnotch.png": "0c547711faa5627641dafe1440f72f60",
"assets/assets/icons/medium.png": "9c4f7da18515c392a3ffe1c713360538",
"assets/assets/icons/uparrow.png": "308f35973d51dde1eaa9b6c0c3bb2f86",
"assets/assets/icons/fontfamily.png": "e9bcc17213a478bc0affc2fbc811077c",
"assets/assets/icons/iosnetwork.png": "d9375e2480ca119713518afa96292ce4",
"assets/assets/icons/education.png": "b5e8a6ef13e85541bf2a17ceee1bdddd",
"assets/assets/icons/about.png": "5aa30cc029a3689c68e01fedf354b809",
"assets/assets/icons/love.png": "56ee6ca8a8f6b612933d7aa4b1810917",
"assets/assets/icons/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/icons/linkedn.png": "8330cd41825fe864a437d38d921b7b4a",
"assets/assets/icons/skills.png": "131768135537f6d6e5b02081d86c5f4f",
"assets/assets/icons/downarrow.png": "69de8d56a8845fcd5d6a0c65dc2b8c52",
"assets/assets/icons/coding.png": "97643a49f5a141f5c31f46806b09c21d",
"assets/assets/icons/mic.png": "07cfbb4c10de5f8eb17f9d163073471e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
