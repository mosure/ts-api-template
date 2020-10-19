import serverless from 'serverless-http';

import get_app from '@app/app';


export const handler = serverless(get_app());
