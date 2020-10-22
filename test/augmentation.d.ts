import { Context as MochaContext } from 'mocha';
import { SuperTest, Test as SuperTestTest } from 'supertest';


declare module 'mocha' {
    export interface Context extends MochaContext {
        app: SuperTest<SuperTestTest>;
    }
}
