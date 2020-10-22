import * as winston from 'winston';
import LogstashTransport from 'winston3-logstash-transport';

import { ILogger, ISettings } from '@app/interfaces';


export const create_logger = function(settings: ISettings): ILogger {
    return winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.json(),
            winston.format.metadata()
        ),
        defaultMeta: {
            service: settings.appName
        },
        transports: [
            new winston.transports.Console({
                format: winston.format.simple(),
                silent: settings.testMode
            }),
            new LogstashTransport({
                applicationName: settings.appName,
                host: settings.loggingHost,
                mode: 'udp',
                port: settings.loggingPort,
                silent: settings.testMode,
            })
        ]
    });
};
