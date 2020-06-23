const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
        message.channel.send("You don't have permission to use that command. (⁎˃ᆺ˂) ");
    else {
        try {
            let bannedMember = await message.guild.members.ban(args);
            if (bannedMember)
                 console.log(bannedMember.tag + " was banned.");
                 message.channel.send(`${bannedMember} Have been Bannd from the Server! (҂⌣̀_⌣́)`)
        }
            catch(err){
            console.log(err);
        }
    }
}






module.exports.config = {
    name: "ban",
    description: "bans a user",
    usage: "?ban",
    accessableby: "Admins",
    aliases:[]
}



