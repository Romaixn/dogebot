const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class AssCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ass',
            group: 'nsfw',
            nsfw: true,
            memberName: 'ass',
            description: 'Prends une pause',
            examples: ['!ass']
        });
    }

    run(message, args) {
        requestHandler.makeRequest("reddit", "ass")
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("NSFW | Ass")
                    .setColor(0x00AE86)
                    .setImage(json.url);
                message.channel.send({ embed })
            });
        message.delete()
    }
}

module.exports = AssCommand
