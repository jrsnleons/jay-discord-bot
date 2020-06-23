const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply(" (づ ◕‿◕ )づ ")
}

module.exports.config = {
    name: "hug",
    description: "sends a hug emoji",
    usage: "?hug",
    accessableby: "Members",
    aliases:[]
}
