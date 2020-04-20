// Initialize database
require('dotenv').config();
require('../config/database');
const Shortcut = require('../models/shortcut');

// seed data files
const macos = require('./Applications/macos');
const vscode = require('./Applications/vscode');

// clear out all recipes
const deleteAll = Shortcut.deleteMany({});


Promise.all([deleteAll])
.then(function() {
  return Shortcut.create(macos.shortcts);
})
.then(function() {
  return Shortcut.create(vscode.shortcts);
})
.then(function() {
  process.exit();
});