'use strict';
const goal = require('./goal');
const task = require('./task');
const event = require('./event');
const action = require('./action');
const project = require('./project');
const team = require('./team');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(team);
  app.configure(project);
  app.configure(action);
  app.configure(event);
  app.configure(task);
  app.configure(goal);
};
