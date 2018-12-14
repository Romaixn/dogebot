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
        var insert = function(nom, money){
            let newMoney = money + 100;
            db.run("UPDATE users SET money = ? where nom = ?", [newMoney, nom]);
            let embed = new RichEmbed()
                .setTitle("Daily | " + nom)
                .setDescription("Vous avez maintenant: " + newMoney + "€")
                .setAuthor(message.author.username, message.author.displayAvatarURL)
                .setColor(0x00AE86);
            return message.embed(embed);

        };
        var ajout = function(name){
            db.run("INSERT INTO users(nom, money) VALUES(?, ?)", [name, 0]);
            return message.reply("Vous venez d'être ajouté dans la banque, bienvenue !");
        };

        db.get("SELECT money FROM users WHERE nom = ?" , [message.author.username], (err, row) => {
            if(err){
                console.log(err.message);
            }
            return row
                ? insert(message.author.username, row.money)
                : ajout(message.author.username);
        });
    }
}


module.exports = DailyCommand;
