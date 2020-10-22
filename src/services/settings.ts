import { injectable } from 'inversify';

import { ISettings } from '@app/interfaces';


@injectable()
export class Settings implements ISettings {
    appName: string;
    loggingHost: string;
    loggingPort: number;
    testMode = false;

    constructor() {
        this.appName = process.env.APP_NAME || '';
        this.loggingHost = process.env.LOGGING_HOST || '';
        this.loggingPort = +(process.env.LOGGING_PORT || '');
    }
}
