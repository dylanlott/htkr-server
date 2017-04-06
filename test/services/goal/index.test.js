'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('goal service', function() {
  it('registered the goals service', () => {
    assert.ok(app.service('goals'));
  });
});
