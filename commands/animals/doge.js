const commando = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

class DogeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'doge',
            group: 'animals',
            memberName: 'doge',
            description: 'Doge t\'enverra une image de lui même. Incroyable non ?',
            examples: ['!doge']
        });
    }

    run(message, args) {
        randomPuppy('ShibaInu')
            .then(url => {
                const embed = new Discord.RichEmbed()
                      .setTitle("Putain de doge")
                      .setColor(0x00AE86)
                      .setImage(url);
                message.channel.send({ embed });
            });
    }
}

module.exports = DogeCommand;
