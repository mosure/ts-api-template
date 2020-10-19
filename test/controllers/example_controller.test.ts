import { expect } from 'chai';
import 'mocha';
import request from 'supertest';

import get_app from '../../src/app';


describe('Example Controller Test', () => {
    it('should GET /', async function () {
        const res = await request(
            get_app()
        ).get('/').send();

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
    });
});
