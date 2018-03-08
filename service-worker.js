let cacheName = 'data-v.1.1.0';

self.addEventListener('install',function (e) {
    console.log('Installing service worker');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Service worker caching build');
            return cache.addAll(['./',
              'index.html',
            	'js/main.js',
            	'js/config.js',
            	'service-worker.js',
            	'manifest.json',
            	'css/bootstrap.min.css']);
        })
    )
});

self.addEventListener('activate',function(e){
	console.log('activating');
	e.waitUntil(
		caches.keys().then(function(keylist){
			return Promise.all(keylist.map(function(key){
				if(key !== cacheName){
					console.log('removing old cache');
					return caches.delete(key);
				}
			}));
		})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});