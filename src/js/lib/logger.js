const ConsoleLog = function ConsoleLog(level, msg) {
  const date = new Date();
  const datetime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  const levelText = level === 0 ? 'DEBUG' : 'ERROR';

  console.log(`[${levelText}] ${datetime} - ${msg}`);
};

const Logger = {
  level: 0,
  DEBUG: 0,
  ERROR: 100,
  setLevel(level) {
    Logger.level = level;
  },
  debug(msg) {
    if (Logger.level >= Logger.DEBUG) {
      ConsoleLog(Logger.DEBUG, msg);
    }
  },
  error(msg) {
    if (Logger.level >= Logger.ERROR) {
      ConsoleLog(Logger.ERROR, msg);
    }
  },
};

export default Logger;
