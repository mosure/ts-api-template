import { before } from 'mocha';
import request from 'supertest';

import get_app from '@app/app';

import { test_bindings } from '@test/mock.inversify.config';


// Construct application once, globally
before(async function() {
    this.app = request(get_app(test_bindings));
});
