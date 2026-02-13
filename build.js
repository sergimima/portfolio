const polyfills = require('./polyfills.js');
const childProcess = require('child_process');
const { execSync } = childProcess;

(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to ensure polyfills are applied
    console.log('Global Headers before build:', global.Headers); // Log to confirm Headers is defined
    execSync('npm run build', { stdio: 'inherit' });
})();