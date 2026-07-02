const CACHE="musichub-v1";

const FILES=[

"/",

"index.html",

"style.css",

"script.js",

"player.html",

"player.css",

"player.js",

"manifest.json"

];

self.addEventListener("install",function(event){

event.waitUntil(

caches.open(CACHE)

.then(function(cache){

return cache.addAll(FILES);

})

);

});

self.addEventListener("fetch",function(event){

event.respondWith(

caches.match(event.request)

.then(function(response){

return response || fetch(event.request);

})

);

});
