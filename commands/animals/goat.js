const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class GoatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'goat',
            group: 'animals',
            memberName: 'goat',
            description: 'Doge t\'enverra une image mignonne d\'une chèvre',
            examples: ['!goat']
        });
    }

    run(message, args) {
        requestHandler.makeRequest("reddit", "goats", false)
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("Chèvre")
                    .setColor(0x00AE86)
                    .setImage(json.url)
                message.channel.send({ embed })
            });
    }
}

module.exports = GoatCommand;
