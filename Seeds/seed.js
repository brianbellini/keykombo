// Initialize database
require('dotenv').config();
require('../config/database');
const Shortcut = require('../models/shortcut');
const macos = require('./Applications/macos');

// clear out all recipes
const p1 = Shortcut.deleteMany({});

Promise.all([p1])

.then(function() {
  return Shortcut.create(macos.shortcts);
})

.then(function() {
  process.exit();
});