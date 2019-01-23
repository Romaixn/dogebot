const commando = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');

class FoxCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fox',
            group: 'animals',
            memberName: 'fox',
            description: 'Doge t\'enverra une image d\'un renard',
            examples: ['!fox']
        });
    }

    run(message, args) {
        request({
            url: "https://randomfox.ca/floof/?ref=public-apis",
            json : true
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                const embed = new Discord.RichEmbed()
                      .setTitle("Renard")
                      .setColor(0x00AE86)
                      .setImage(body['image']);
                message.channel.send({ embed });
            }
        });
    }
}

module.exports = FoxCommand;
