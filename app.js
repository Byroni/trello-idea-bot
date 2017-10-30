const Discord = require('discord.js');
const client = new Discord.Client();
const Trello = require('trello');
const trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_USER_TOKEN)
// const request = require('superagent');

client.on('ready', () => {
    console.log('Alred at your service');
});

client.on('message', msg => {
    var cmd = msg.content.substr(0, msg.content.indexOf(' '));
    var idea = msg.content.substr(msg.content.indexOf(' ' ) + 1);

    if (cmd === '!idea') {
        trello.addCard(idea, '', '59b4f885bdeef2d997a0a21e', (err, card) => {
            if (err) {
                msg.reply("I couldn't create your card. Check your command and make sure it is in the format of !idea [message]");
            } else {
                msg.reply('I have gone ahead and added your card for you');
            }
        })
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);