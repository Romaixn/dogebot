const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class FatCatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fatcat',
            group: 'animals',
            memberName: 'fatcat',
            description: 'Doge t\'enverra une image d\'un gros chat',
            examples: ['!fatcat']
        });
    }

    run(message, args) {
        requestHandler.makeRequest("reddit", "fatcat", false)
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("Gros chat")
                    .setColor(0x00AE86)
                    .setImage(json.url)
                message.channel.send({ embed })
            });
    }
}

module.exports = FatCatCommand;
