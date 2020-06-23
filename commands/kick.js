const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
    return message.channel.send("You don't have permission to use that command. (⁎˃ᆺ˂) ");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked');
            message.channel.send(`${member},Kicked! (҂⌣̀_⌣́)`)
        }
            catch(err){
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "kicks a user",
    usage: "?kick",
    accessableby: "Admins",
    aliases:[]
}