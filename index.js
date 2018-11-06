// Beginning of file
const Eris = require('eris');
const config = require('./config/config')
process.env.NODE_ENV = 'development';

bot = new Eris.CommandClient(global.gConfig.token, {}, {
  description: '',
  prefix: ['-', '@mention'],
  ignoreBots: true,
  owner: 'Sphexator',
  name: "Sophia",
  ignoreSelf: true,
  defaultHelpCommand: true
});

require('./Handler/CommandHandler');
require('./Handler/EventHandler');

bot.on("ready", () => {
    console.log("Ready!");
});

bot.connect();