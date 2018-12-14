const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
var sql = require('sqlite3').verbose();

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
        var get = function(money){
            let embed = new RichEmbed()
                .setDescription("Vous avez : " + money + "€")
                .setAuthor(message.author.username, message.author.displayAvatarURL)
                .setColor(0x00AE86);
            return message.embed(embed);
        };

        var insert = function(user){
            db.run("INSERT INTO users(nom, money) VALUES(?, ?)", [user, 0]);
            return message.reply("Vous venez d'être ajouté dans la banque, bienvenue !");
        };

        db.get("SELECT money FROM users WHERE nom = ?",[message.author.username], (err, row) => {
            if(err){
                console.log(err.message);
            }
            return row
                ? get(row.money)
                : insert(message.author.username);
        });
    }
}

module.exports = MoneyCommand;
