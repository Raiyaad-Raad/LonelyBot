const main = require('discord.js')

const client = new main.Client({
    intents: 3276799
})

const dotenv = require('dotenv').config()

client.once(main.Events.ClientReady, c => {
    console.log('Online')
    client.user.setAvatar('https://discord.com/channels/@me/1020198624694652928/1051033823489572894');
})

client.login(process.env.token);