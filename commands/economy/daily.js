const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
var sql = require('sqlite3');

var db = new sql.Database('data/database.db');

class DailyCommand extends Command {
    constructor(client){
        super(client, {
            name: 'daily',
            group: 'economy',
            memberName: 'daily',
            description: 'Réclame ton argent',
            examples: ['!daily']
        });
    }

    run(message){
        console.log("Je suis bien dans le run");
        var money;
        console.log("Je suis après la variable");
        db.each("SELECT * from users where nom = ?", [message.author.name], function(err, row){
            console.log("Je suis après le db.each");
            if(err){
                console.log("Je suis dans la condition err");
                console.log(err);
            } else {
                console.log("Je suis dans le else");
                money = row.money;
                console.log(typeof money);
                db.run('UPDATE users SET money = ? where nom = ?', [money+100, row.nom]).catch(error);
                const embed = new RichEmbed()
                      .setTitle("Daily")
                      .setDescription("Vous avez maintenant " + row.money)
                      .setColor(0x00AE86);
                message.embed(embed);
            }
        });
    }
}


module.exports = DailyCommand;
