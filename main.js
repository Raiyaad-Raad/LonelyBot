const main = require('discord.js')

const client = new main.Client({
    intents: 3276799
})

const dotenv = require('dotenv').config()

client.once(main.Events.ClientReady, c => {
    console.log('Online')
    client.user.setAvatar('https://cdn.discordapp.com/attachments/1020198624694652928/1051034077060411412/Screenshot_2022-12-10-13-14-01-26_40deb401b9ffe8e1df2f1cc5ba480b12.jpg');
})

client.login(process.env.token);