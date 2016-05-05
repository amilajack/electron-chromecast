import Cast from './cast';

global.chrome = {
  cast: Cast, // eslint-disable-line
};

global.requestHandler = (receiverList) =>
  new Promise((resolve) => resolve(receiverList[0]));

global.castConsole = {
  log: (...args) => {
    if (!global.castDevMode) return;
    castConsole.log(...args); // eslint-disable-line
  },
  info: (...args) => {
    if (!global.castDevMode) return;
    castConsole.info(...args); // eslint-disable-line
  },
  warn: (...args) => {
    if (!global.castDevMode) return;
    castConsole.warn(...args); // eslint-disable-line
  },
  error: (...args) => {
    if (!global.castDevMode) return;
    castConsole.error(...args); // eslint-disable-line
  },
};

module.exports = (requestHandler, dev) => {
  global.requestHandler = requestHandler;
  global.castDevMode = dev;
};
