const commando = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

class ZoomiesCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'zoomies',
            group: 'animals',
            memberName: 'zoomies',
            description: 'Doge t\'enverra une image d\'un animal heureux',
            examples: ['!zoomies']
        });
    }

    run(message, args) {
        randomPuppy('Zoomies')
            .then(url => {
                const embed = new Discord.RichEmbed()
                      .setTitle("Zoomies")
                      .setColor(0x00AE86)
                      .setImage(url);
                message.channel.send({ embed });
            });
    }
}

module.exports = ZoomiesCommand;
