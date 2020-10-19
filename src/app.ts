import 'reflect-metadata';
import cors, { CorsOptions } from 'cors';
import { Container } from 'inversify';
import { cleanUpMetadata , InversifyExpressServer } from 'inversify-express-utils';

cleanUpMetadata();

import '@app/controllers';
import { bindings } from '@app/inversify.config';


export default () => {
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
