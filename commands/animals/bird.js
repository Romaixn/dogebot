const commando = require('discord.js-commando');
const Discord = require('discord.js');
const request = require('request');

class BirdCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bird',
            group: 'animals',
            memberName: 'bird',
            description: 'Doge t\'enverra une image d\'un oiseau, juste ça',
            examples: ['!bird']
        });
    }

    run(message, args) {
        request({
            url: "http://shibe.online/api/birds?count=1&urls=true&httpsUrls=false",
            json : true
        }, function(error, response, body){
            if(!error && response.statusCode == 200){
                const embed = new Discord.RichEmbed()
                      .setTitle("Oiseau")
                      .setColor(0x00AE86)
                      .setImage(body['0']);
                message.channel.send({ embed });
            }
        });
    }
}

module.exports = BirdCommand;
