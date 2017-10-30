const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Alred at your service');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('aowdhaowhda');
    }
});

client.login('Mzc0NDI5MDU5Mzg1NTI0MjM2.DNhJvw.yhWj8eH6iAsjoz5uoeUn9MkrIyg');