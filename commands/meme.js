
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme", "dankmeme", "christianmemes"]
    const random = subReddits[Math.floor(Math.random()* subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`https://reddit.com/${random}`)
}

module.exports.config = {
    name: "meme",
    description: "",
    usage: "?meme",
    accessableby: "Members",
    aliases:[]
}
