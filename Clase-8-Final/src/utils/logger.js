import winston from 'winston'

const customValues = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        http: 3,
        info: 4,
        debug: 5
    },
    colors: {
        fatal: 'red',
        error: 'orange',
        warning: 'yellow',
        http: 'blue',
        info: 'blue',
        debug: 'white',
    }
}

export const logger = winston.createLogger({
    levels: customValues.levels,
    transports: [
        new winston.transports.Console({ level: 'http', format: winston.format.combine(
            winston.format.colorize({colors: customValues.colors}),
            winston.format.simple()
        ) }),
        new winston.transports.File({ level: 'warning', filename: '../logs/errorlogs.log' })
    ]
})


export const addLogger = (req, res, next) => {
    req.logger = logger
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
    next();
}
