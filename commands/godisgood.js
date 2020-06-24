const Discord = require("discord.js");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("all the time! ｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡");
}

module.exports.config = {
    name: "godisgood",
    description: "",
    usage: "?godisgood",
    accessableby: "Members",
    aliases:['gig']
}

