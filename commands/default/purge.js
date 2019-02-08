const commando = require('discord.js-commando');

class PurgeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'default',
      memberName: 'purge',
      description: "Supprime les `x` messages de ce channel",
      examples: ['!purge 12'],
      args: [
        {
          key: 'args',
          prompt: 'Combien de message veux-tu supprimer ?',
          type: 'integer',
          validate: args => {
            if (args < 100 || args > 2) return true;
            return "Veuillez choisir un nombre entre 2 et 100";
          }
        }
      ]
    });
  }

  async run(message, args) {
    const fetched = await message.channel.fetchMessages({ limit: Object.values(args) });
    message.channel.bulkDelete(fetched)
      .then(() => {
        message.channel.send(`Suppression de ${Object.values(args)} message`).then(msg => msg.delete(3000));
      })
      .catch(error => message.reply(`Impossible de supprimer les messages car : ${error}`));
  }
}

module.exports = PurgeCommand;
