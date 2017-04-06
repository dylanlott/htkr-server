'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('action service', function() {
  it('registered the actions service', () => {
    assert.ok(app.service('actions'));
  });
});
