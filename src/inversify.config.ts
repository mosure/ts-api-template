import { ContainerModule, interfaces } from 'inversify';

import { ILogger, ISettings } from '@app/interfaces';
import { create_logger, Settings } from '@app/services';
import TYPES from '@app/types';


export const bindings = new ContainerModule((bind) => {
    bind<ISettings>(TYPES.Settings).to(Settings).inSingletonScope();
    bind<ILogger>(TYPES.Logger).toDynamicValue((context: interfaces.Context) => {
        const settings = context.container.get<ISettings>(TYPES.Settings);

        return create_logger(settings);
    });
});
