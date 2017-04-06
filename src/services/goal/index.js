'use strict';

const service = require('feathers-mongoose');
const goal = require('./goal-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: goal,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/goals', service(options));

  // Get our initialize service to that we can bind hooks
  const goalService = app.service('/goals');

  // Set up our before hooks
  goalService.before(hooks.before);

  // Set up our after hooks
  goalService.after(hooks.after);
};
