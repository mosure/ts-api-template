import 'reflect-metadata';
import cors, { CorsOptions } from 'cors';
import { ContainerModule, Container } from 'inversify';
import { cleanUpMetadata , InversifyExpressServer } from 'inversify-express-utils';

cleanUpMetadata();

import '@app/controllers';


export default (bindings: ContainerModule) => {
    const corsOptions: CorsOptions = {
        origin: ['localhost'],
        optionsSuccessStatus: 200
    };

    const container = new Container();
    container.load(bindings);

    const app = new InversifyExpressServer(container);
    const expressApp = app.build();

    expressApp.use(cors(corsOptions));

    return expressApp;
};
