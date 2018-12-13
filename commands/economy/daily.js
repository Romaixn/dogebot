const commando = require('discord.js-commando');

class DailyCommand extends commando.Command {
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
        message.say("bite");
    }
}

module.exports = DailyCommand;
