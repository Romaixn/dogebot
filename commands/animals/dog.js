const commando = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');

class DogCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'dog',
            group: 'animals',
            memberName: 'dog',
            description: 'Doge t\'enverra une image mignonne d\'un chien',
            examples: ['!dog']
        });
    }

    run(message, args) {
        request({
            url: "https://random.dog/woof.json?ref=public-apis",
            json : true
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                const embed = new Discord.RichEmbed()
                      .setTitle("Chien")
                      .setColor(0x00AE86)
                      .setImage(body['url']);
                message.channel.send({ embed });
            }
        });
    }
}

module.exports = DogCommand;
