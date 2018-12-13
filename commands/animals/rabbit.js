const commando = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

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
        randomPuppy('Rabbits')
            .then(url => {
                const embed = new Discord.RichEmbed()
                      .setTitle("Lapin")
                      .setColor(0x00AE86)
                      .setImage(url);
                message.channel.send({ embed });
            });
    }
}

module.exports = RabbitCommand;
