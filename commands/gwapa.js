const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply("(⁄ ⁄•⁄ω⁄•⁄ ⁄)     you...")
}

module.exports.config = {
    name: "gwapa",
    description: "tells who is gwapo",
    usage: "?gwapa",
    accessableby: "Members",
    aliases:[]
}