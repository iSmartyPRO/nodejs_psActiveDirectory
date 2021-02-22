const path = require('path')
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
require('winston-daily-rotate-file');

const timezoned = () => {
    return new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Moscow'
    });
}

var transport = new (transports.DailyRotateFile)(
    {
        filename: path.join(__dirname, '..','logs', 'application-%DATE%.log'),
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '1g',
        format:format.combine(format.timestamp({ format: timezoned }),format.prettyPrint()),
        level: 'info'
    }
);

transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
      transport
  ],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
}

module.exports = logger