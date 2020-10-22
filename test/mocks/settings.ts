import { injectable } from 'inversify';

import { ISettings } from '@app/interfaces';


@injectable()
export class MockSettings implements ISettings {
    appName: string;
    loggingHost: string;
    loggingPort: number;
    testMode: boolean;

    constructor() {
        this.appName = 'example_testing';
        this.loggingHost = '';
        this.loggingPort = 0;
        this.testMode = true;
    }
}
