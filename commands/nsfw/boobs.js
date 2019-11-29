const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class BoobsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'boobs',
            group: 'nsfw',
            nsfw: true,
            memberName: 'boobs',
            description: 'Prends une pause',
            examples: ['!boobs']
        });
    }

    run(message, args) {
        requestHandler.makeRequest("reddit", "boobs")
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("NSFW | Boobs")
                    .setColor(0x00AE86)
                    .setImage(json.url);
                message.channel.send({ embed })
            });
        message.delete();
    }
}

module.exports = BoobsCommand;
