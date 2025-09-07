// index.js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is running!'));
app.listen(3000);

client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));
client.on('messageCreate', message => {
  if(message.content === '!ping') message.channel.send('Pong!');
});
client.login(process.env.DISCORD_TOKEN);
