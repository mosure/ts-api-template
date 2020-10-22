import { ContainerModule, interfaces } from 'inversify';

import { bindings } from '@app/inversify.config';
import { ISettings } from '@app/interfaces';
import { MockSettings } from '@test/mocks';
import TYPES from '@app/types';


export const test_bindings = new ContainerModule((
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
) => {
    bindings.registry(bind, unbind, isBound, rebind);

    rebind<ISettings>(TYPES.Settings).to(MockSettings).inSingletonScope();
});
