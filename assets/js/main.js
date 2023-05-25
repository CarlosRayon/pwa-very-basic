console.log('Hola PWA');
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('/sw.js');
}
