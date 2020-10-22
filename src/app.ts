import 'reflect-metadata';
import cors from 'cors';
import { ContainerModule, Container } from 'inversify';
import { cleanUpMetadata , InversifyExpressServer } from 'inversify-express-utils';

cleanUpMetadata();

import '@app/controllers';


export default (bindings: ContainerModule) => {

    const container = new Container();
    container.load(bindings);

    const app = new InversifyExpressServer(container);

    app.setConfig((expressApp) => {
        expressApp.use(cors({
            origin: ['localhost'],
            optionsSuccessStatus: 200
        }));
    });

    const expressApp = app.build();

    return expressApp;
};
