self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('app-offline-v1').then(function (cache) {
			return cache.addAll([
				'/',
				'css/styles.css',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'screenshot.png',
				'js/dbhelper.js',
				'js/main.js',
				'js/restaurant_info.js',
				'js/jquery-3.3.1.min.js',
				'manifest.json',
				'index.html',
				'restaurant.html'
			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});