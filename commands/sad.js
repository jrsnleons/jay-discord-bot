const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply("Do you think I care? ┐(￣～￣)┌")
}

module.exports.config = {
    name: "imsad",
    description: "who cares",
    usage: "?imsad",
    accessableby: "Members",
    aliases:[]
}