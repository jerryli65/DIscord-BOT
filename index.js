// Information for the bot to run
const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;
const prefix = "-";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// DIBOT Code, including commands and actions
client.once("ready", () =>{
    console.log("This bot is online.");
})

client.on("voiceStateUpdate", function(oldMember, newMember){
    console.log(`a user joined or left the call.`);
    /* Originally Pythonic
    https://stackoverflow.com/questions/54069538/how-to-use-a-discord-py-bot-that-gives-a-user-role-when-they-join-vc-and-remove
    */
    // if (!oldMember.channel && newMember.channel){
    //     role = Discord.utils.get(member.guild.roles, name="role name")
    //     //await member.add_roles(role)
    // }
    
    /*
    Based on discord.js guide, "FAQ - Administrative - add a role to guild member"
    A note on interactions: https://discordjs.guide/interactions/replying-to-slash-commands.html#receiving-interactions
    
    */
    if (!oldMember.channel && newMember.channel){
        const role = interaction.options.getRole("role");
        const member = interaction.options.getMember('target');
        member.roles.add(role);
    }
    else if (oldMember.channel && !newMember.channel){
        const role = interaction.options.getRole("role");
        const member = interaction.options.getMember('target');
        member.roles.remove(role);
    }

});

client.on("message", message=>{
    
    if(message.content === "Hello there!")
        message.channel.send("General Kenobi!");
    
    if(!message.content.startsWith(prefix) || message.author.bot) return; // if the message doesn't start with - or the message is from the bot

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    commandProcessed = false;
    // if(command === "help")
    //     client.commands.get("help").execute(message, args);
    // else if(command === "ping")
    //     client.commands.get("ping").execute(message, args);
    // else if(command === "youtube")
    //     message.channel.send("https://www.youtube.com/channel/UCISHNacSQbfBWQHvlD6H3sQ");
    if(command.startsWith("dcip")){
        client.commands.get("dci_piece_played").execute(message, args);
        commandProcessed = true;
    }
    else if(command.startsWith("dcic")){
        client.commands.get("dci_corps_info").execute(message, args);
        commandProcessed = true;
    }
    else if(command.startsWith("dci")){
        client.commands.get("dci_scores").execute(message, args);
        commandProcessed = true;
    }
    else if(command.startsWith("embedtest1")){
        client.commands.get("embedtest1").execute(message, args);
        commandProcessed = true;
    }
    
    if (commandProcessed) return;
    switch(command) {
        case "help":
            client.commands.get("help").execute(message, args);
            break;
        case "ping":
            client.commands.get("ping").execute(message, args);
            break;
        case "youtube":
            message.channel.send("https://www.youtube.com/channel/UCISHNacSQbfBWQHvlD6H3sQ");
            break;
        default:
            message.channel.send("`-help` for info on how to use this bot.");
    }
    
});

client.login(token);


