const Discord = require('discord.js');
const fs = require ('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', massage => {
  if (massage.content === 'ping') {
    massage.reply('Pong!');
  }
});

client.login('BOT_TOKEN');
