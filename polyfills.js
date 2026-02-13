if (typeof performance === 'undefined') {
    global.performance = Date;
}

(async () => {
    const { Headers } = await import('node-fetch'); // Use dynamic import
    global.Headers = Headers; // Set global.Headers
    console.log('Headers polyfill loaded:', global.Headers); // Log to confirm loading
})();