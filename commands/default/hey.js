const commando = require('discord.js-commando');

class HeyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hey',
            group: 'default',
            memberName: 'hey',
            description: "Dis bonjour à dogeBot, c'est sympa",
            examples: ['!hey']
        });
    }

    async run(message) {
        const msg = await message.say("HEY");
        return msg.edit("Hey salut à tous les amis c'est davidlafargepokemon");
    }
}

module.exports = HeyCommand;
