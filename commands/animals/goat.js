const commando = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

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
        randomPuppy('goats')
            .then(url => {
                const embed = new Discord.RichEmbed()
                      .setTitle("Chèvre")
                      .setColor(0x00AE86)
                      .setImage(url);
                message.channel.send({ embed });
            });
    }
}

module.exports = GoatCommand;
