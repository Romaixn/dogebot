const commando = require('discord.js-commando');
const Discord = require('discord.js');
const Kaori = require('kaori');
const kaori = new Kaori();

class NsfwCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'nsfw',
            group: 'nsfw',
            nsfw: true,
            memberName: 'nsfw',
            description: 'Prends une pause',
            examples: ['!nsfw']
        });
    }

    run(message, args) {
        kaori.search('danbooru', { tags: [args], limit: 1, random: true })
        // .then(images => message.reply(images[0].common.fileURL))
            .then(function (images) {
                const embed = new Discord.RichEmbed()
                      .setTitle("NSFW")
                      .setColor(0x00AE86)
                      .setImage(images[0].common.fileURL);
                message.delete();
                message.channel.send({ embed });
            })
            .catch(function (err) {
                const embed = new Discord.RichEmbed()
                      .setTitle("NSFW")
                      .setColor(0xC0392B)
                      .setDescription("Erreur, argument introuvable");
                message.delete();
                message.channel.send({ embed });
            });
    }
}

module.exports = NsfwCommand;
