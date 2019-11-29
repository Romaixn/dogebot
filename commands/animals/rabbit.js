const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class RabbitCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'rabbit',
            group: 'animals',
            memberName: 'rabbit',
            description: 'Doge t\'enverra une image mignonne d\'un lapin',
            examples: ['!rabbit']
        });
    }

    run(message, args) {
        requestHandler.makeRequest("reddit", "rabbits", false)
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("Lapin")
                    .setColor(0x00AE86)
                    .setImage(json.url)
                message.channel.send({ embed })
            });
    }
}

module.exports = RabbitCommand;
