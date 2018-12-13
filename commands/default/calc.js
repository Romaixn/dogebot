const commando = require('discord.js-commando');
const Client = require('node-wolfram');
const Wolfram = new Client('K4XQUK-R83AAT78RP');

class CalcCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'calc',
            group: 'default',
            memberName: 'calc',
            description: 'Fais de super calculs',
            examples: ['!calc <calcul>'],
            args: [
                {
                    key: 'args',
                    prompt: 'Quelle information souhaites-tu savoir ?',
                    type : 'string'
                }
            ]

        });
    }

    async run(message, { args }) {
        Wolfram.query(args, function (err, result) {
            if (err) {
                message.reply("erreur dans ton calcul :cry:");
            } else {
                try {
                    var pod = result.queryresult.pod[1];
                    message.channel.send(pod.$.title + ": ");
                    for (var b = 0; b < pod.subpod.length; b++) {
                        var subpod = pod.subpod[b];
                        for (var c = 0; c < subpod.plaintext.length; c++) {
                            var text = subpod.plaintext[c];
                            message.channel.send('\t' + text);
                        }
                    }
                } catch (error) {
                    message.channel.send("Argument inconnu");
                }
            }
        });
    }
}

module.exports = CalcCommand;
