'use strict';

const service = require('feathers-mongoose');
const action = require('./action-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: action,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/actions', service(options));

  // Get our initialize service to that we can bind hooks
  const actionService = app.service('/actions');

  // Set up our before hooks
  actionService.before(hooks.before);

  // Set up our after hooks
  actionService.after(hooks.after);
};
