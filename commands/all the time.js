const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("God is good! ヽ(>∀<☆)ノ");
}

module.exports.config = {
    name: "allthetime",
    description: "",
    usage: "?allthetime",
    accessableby: "Members",
    aliases:['att']
}

