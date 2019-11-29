const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class SnakeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'snake',
            group: 'animals',
            memberName: 'snake',
            description: 'Doge t\'enverra une image mignonne d\'un serpent avec un chapeau',
            examples: ['!snake']
        });
    }

    run(message, args) {
        requestHandler.makeRequest("reddit", "SnakesWithHats", false)
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("Serpent avec un chapeau")
                    .setColor(0x00AE86)
                    .setImage(json.url)
                message.channel.send({ embed })
            });
    }
}

module.exports = SnakeCommand;
