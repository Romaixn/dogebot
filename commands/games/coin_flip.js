const commando = require('discord.js-commando');
const config = require('./config');

class CoinFlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'games',
            memberName: 'flip',
            description: 'Lance une pièce',
            examples: ['!flip'],
            args: [
                {
                    key: 'args',
                    prompt: 'De quel côté voulez vous lancer la pièce ? (pile/face)',
                    type: 'string',
                }
            ]
        });
    }

    run(message, { args }) {
        var flip = Math.floor(Math.random() * 2) + 1;
        var msg = "";
        if (args === "pile" && flip === 1) {
            msg = "La pièce est tombée sur pile, vous avez gagné !";
        } else if (args === "face" && flip === 2) {
            msg = "La pièce est tombée sur face, vous avez gagné !";
        } else if (args !== "pile" && args !== "face" && args !== "doge") {
            msg = "Veuillez entrer <pile> ou <face>";
        } else if (args === "doge") {
            msg = "Vous avez absolument gagné.";
        } else {
            msg = "Vous avez perdu :'(";
        }
        message.channel.send({
            embed: {
                color: config.embedColor,
                title: 'Pile ou face | ' + message.author.username,
                description: msg
            }
        });
    }
}

module.exports = CoinFlipCommand;
