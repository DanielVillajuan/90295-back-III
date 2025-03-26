import winston from "winston"

const customs = {
    levels: {
        faltal: 0,
        error: 1,
        http: 2,
        warning: 3,
        info: 4
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

const logger = winston.createLogger({
    levels: customs.levels,
    transports: [
        new winston.transports.Console({ level: 'http', format: winston.format.combine(winston.format.colorize({colors: customs.colors}),winston.format.simple())}),
        new winston.transports.File({level: 'warning', filename: './errorlogs.log'})
    ]
})

export const insertLog = (req, res, next) => {
    req.logger = logger
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toISOString()}`)
    next()
}
