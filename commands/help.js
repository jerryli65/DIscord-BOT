module.exports = {
    name: "help",
    description: "Displays help and bot information. Does not include commands.",
    execute(message, args){
        const Discord = require('discord.js');

        const exampleEmbed = new Discord.MessageEmbed()
	        .setTitle('Help Information for Dibot')
            .setDescription("Description");
	        // .attachFiles(['../assets/discordjs.png'])
	        // .setImage('attachment://discordjs.png');

        message.channel.send(exampleEmbed);
    }
}