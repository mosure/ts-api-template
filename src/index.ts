import serverless from 'serverless-http';

import get_app from '@app/app';
import { bindings } from '@app/inversify.config';


export const handler = serverless(get_app(bindings));
