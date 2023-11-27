const customEventEmitter = require('./customEmitter');

const MIN_INTERVAL = 100; // 0.1 seconds
const MAX_INTERVAL = 15000; // 15 seconds

let userCount = 1;

function simulateLogin() {
  const randomInterval = Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1) + MIN_INTERVAL);
  setTimeout(() => {
    customEventEmitter.emit('userLoggedIn', `USER_${userCount} logged in`);
    userCount++;

    simulateLogout();
    simulateLogin();
  }, randomInterval);
}

function simulateLogout() {
  const randomInterval = Math.floor(Math.random() * (MAX_INTERVAL - MIN_INTERVAL + 1) + MIN_INTERVAL);
  setTimeout(() => {
    customEventEmitter.emit('userLoggedOut', `USER_${userCount - 1} logged out`);
  }, randomInterval);
}

customEventEmitter.on('userLoggedIn', (message) => {
  console.log(`TIMESTAMP: ${new Date().toISOString()} - ${message}`);
});

customEventEmitter.on('userLoggedOut', (message) => {
  console.log(`TIMESTAMP: ${new Date().toISOString()} - ${message}`);
});

console.log('Simulating user logins...');
simulateLogin();
