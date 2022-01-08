# DIBOT: A Discord Robot
DIBOT specializes in retrieving information and statistics related to [Drum Corps International](https://en.wikipedia.org/wiki/Drum_Corps_International "Drum Corps International") (DCI). 

It is intended for use with the [Discord App](https://discord.com/ "Discord App"). It is written in JavaScript with help from [discord.js](https://discord.js.org/#/ "discord.js"), a node.js module that interacts with the Discord API. Commands are one file each and are triggered by user messages within the Discord App.

## Motivation
DIBOT was created because of the sheer number of drum corps and competitions within DCI, which has been around since 1920. I wanted a way to reference statistics from any corps and any year without needing to Google it. 

## Installing DIBOT For Your Server
To run the bot yourself, set up a new bot in the [Discord Developer Portal](https://discord.com/login?redirect_to=%2Fdevelopers "Discord Developer Portal"). Take note of the token in the portal - it is unique to you. Set the environment variable on your machine called "DISCORD_TOKEN" to said token. Next, simply add the bot to your Discord server. Finally, run the code with your favorite IDE.

## Usage

| Command         | Action     |
|--------------|-----------|
| -dcic [corps name] | returns information about [corps name]     |
| -dcip [piece name]     | returns a list of corps who have played [piece name]  |
| -dci [year] |returns the full results (rankings, placements) of [year]     |

## Contributing to the Project
This project is not accepting contributions at this time. This project is still under active development, and more commands are in the works.

## Support
If you run into an error or bug, or have any questions or concerns, please open an [Issue.](https://github.com/jerryli65/Discord-Bot/issues "Issue.")

## Credits
* The bot is supplemented heavily by the following fan-maintained wiki, [The Drum Corps Xperience.](http://www.dcxmuseum.org/index.cfm "The Drum Corps Xperience.")
I do not own DCX. All rights and credits to the owners of DCX.
* discord.js is a node.js module written for the Discord API.


## License
[MIT License](https://choosealicense.com/licenses/mit/ "MIT License")

Copyright (c) [2022] [Jerry Li]
