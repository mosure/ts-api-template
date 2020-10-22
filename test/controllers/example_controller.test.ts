import { expect } from 'chai';
import 'mocha';

import '@test/helper';


describe('Example Controller Test', () => {
    it('should GET /', async function () {
        const res = await this.app.get('/').send();

        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
    });
});
