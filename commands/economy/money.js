const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
var sql = require('sqlite3');

var db = new sql.Database('data/database.db');

class MoneyCommand extends Command {
    constructor(client){
        super(client, {
            name: 'money',
            group: 'economy',
            memberName: 'money',
            description: 'Pour savoir la money que tu possèdes',
            examples: ['!money']
        });
    }

    run(message){
        db.each("SELECT money from users where nom = ?",[message.author.username], function(err, row){
            if(err){
                console.log(err);
            } else {
                const embed = new RichEmbed()
                      .setDescription("Vous avez : " + row.money)
                      .setAuthor(message.author.username, message.author.displayAvatarURL)
                      .setColor(0x00AE86)
                      .setTimestamp();
                message.embed(embed);
            }
        });
    }
}

module.exports = MoneyCommand;
