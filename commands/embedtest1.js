module.exports = {
    name: "embedtest1",
    description: "Displays help and bot information. Does not include commands.",
    execute(message, args){
        // at the top of your file
    const Discord = require('discord.js');

// inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Some title')
	    .setURL('https://discord.js.org/')
	    .setAuthor('Jerbear')
	    .setDescription('Some description here')
	    .setThumbnail('https://imgur.com/a/An4yRKP')
	    .addFields(
		    { name: 'Regular field title', value: 'Some value here' },
		    { name: '\u200B', value: '\u200B' },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
		    { name: 'Inline field title', value: 'Some value here', inline: true },
	    )
	    .addField('Inline field title', 'Some value here', true)
	    .setImage('https://imgur.com/a/An4yRKP')
	    .setTimestamp()
	    .setFooter('Some footer text here', 'https://imgur.com/a/An4yRKP');

        message.channel.send(exampleEmbed);
    }
}