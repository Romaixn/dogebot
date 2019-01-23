const commando = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

class PornCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'porn',
            group: 'nsfw',
            nsfw: true,
            memberName: 'porn',
            description: 'Prends une pause',
            examples: ['!porn']
        });
    }

    run(message, args) {
        randomPuppy('nsfw_gifs')
            .then(url => {
                const embed = new Discord.RichEmbed()
                      .setTitle("NSFW | Porn")
                      .setColor(0x00AE86)
                      .setImage(url);
                message.channel.send({ embed });
            });
        message.delete();
    }
}

module.exports = PornCommand;
