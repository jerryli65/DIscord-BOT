module.exports = {
    name: "dci_corps_info",
    description: "The user enters a corps and Dibot returns information about that corps.",
    execute(message, args){
        var name = message.toString().slice(5);
        message.channel.send(name);
        
        const words = name.split(" ");

        // for(let i = 0; i < words.length; i++){
        //     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        // }

        // name_cap = "";
        // var searchString = "";
        // for(let i = 0; i < words.length-1; i++){
        //     name_cap += words[i] + " ";
        //     searchString += words[i] + "_";
        // }
        // name_cap += words[words.length-1];
        // searchString += words[words.length-1];

        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle(name + " Drum and Bugle Corps")
	        //.setURL("https://en.wikipedia.org/wiki/" + name + "_Drum_and_Bugle_Corps")
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
            message.channel.send("here");
    }
}