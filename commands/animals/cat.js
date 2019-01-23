const commando = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');

class CatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'animals',
            memberName: 'cat',
            description: 'Doge t\'enverra une image d\'un chat',
            examples: ['!cat']
        });
    }

    run(message, args) {
        request({
            url: "https://aws.random.cat/meow?ref=public-apis",
            json : true
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                const embed = new Discord.RichEmbed()
                      .setTitle("Chat")
                      .setColor(0x00AE86)
                      .setImage(body['file']);
                message.channel.send({ embed });
            }
        });
    }
}

module.exports = CatCommand;
