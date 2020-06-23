const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("(◕︿◕✿) goodbye")
}

module.exports.config = {
    name: "bye",
    description: "sad goodbyes",
    usage: "?bye",
    accessableby: "Members",
    aliases:[]
}