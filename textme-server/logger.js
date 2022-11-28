const winston = require('winston');
require('dotenv').config();

const logger = winston.createLogger({
    level: process.env.ENV === "DEV" ? "debug" : "info",
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message} => ${i}`)
    ),
    transports: [new winston.transports.Console()]
})

module.exports = {logger};