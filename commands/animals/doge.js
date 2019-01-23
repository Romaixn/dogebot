const commando = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');

class DogeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'doge',
            group: 'animals',
            memberName: 'doge',
            description: 'Doge t\'enverra une image d\'un putain de chien',
            examples: ['!doge']
        });
    }

    run(message, args) {
        request({
            url: "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false",
            json : true
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                const embed = new Discord.RichEmbed()
                      .setTitle("Doge")
                      .setColor(0x00AE86)
                      .setImage(body['0']);
                message.channel.send({ embed });
            }
        });
    }
}

module.exports = DogeCommand;
