var BasicCard = require('./basic-card.js');

var ClozeCard = require('./cloze-card.js');

var inquirer = require('inquirer');

var fs = require('fs');

var cardChoice = process.argv[2];

var basicCard = new BasicCard();

var clozeCard = new ClozeCard();