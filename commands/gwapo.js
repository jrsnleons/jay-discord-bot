const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply("maybe you... (*/ω＼)")
}

module.exports.config = {
    name: "gwapo",
    description: "tells who is gwapo",
    usage: "?gwapo",
    accessableby: "Members",
    aliases:[]
}