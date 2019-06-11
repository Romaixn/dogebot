const commando = require('discord.js-commando');

class DmCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'dm',
            group: 'default',
            memberName: 'dm',
            description: "Envois un message à l'utilisateur que tu as mentionné",
            examples: ['!dm @User <message>'],
            throttling: {
                usages : 2,
                duration: 60
            },
            args: [
                {
                    key: 'user',
                    prompt: 'A quel utilisateur veux tu envoyer un message ?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'Que veux tu lui dire ?',
                    type: 'string',
                    validate: content => {
                        if (content.length < 201) return true;
                        return "Le message dépasse 200 caractères";
                    }
                }
            ]
        });
    }

    run(message, { user, content }){
        user.send(content);
        message.delete();
    }
}

module.exports = DmCommand;
