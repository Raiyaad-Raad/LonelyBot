const main = require('discord.js')

const client = new main.Client({
    intents: 3276799
})

const dotenv = require('dotenv').config()

client.once(main.Events.ClientReady, c => {
    console.log('Online')
})

client.login(process.env.token);