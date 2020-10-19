import { inject } from 'inversify';
import {
    controller,
    httpGet,
} from 'inversify-express-utils';

import { ILogger, ISettings } from '@app/interfaces';
import TYPE from '@app/types';


@controller('/')
export class ExampleController {
    public constructor (
        @inject(TYPE.Logger) private logger: ILogger,
        @inject(TYPE.Settings) private settings: ISettings
    ) { }

    @httpGet('/')
    public async get() {
        this.logger.warn('This is a test warning!');

        return this.settings;
    }
}
