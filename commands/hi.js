//reply messages system

const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send(" o(*>ω<*)o Hello!!!")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "?hi",
    accessableby: "Members",
    aliases:[]
}

