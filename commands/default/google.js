const commando = require('discord.js-commando');

class GoogleCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'google',
      group: 'default',
      memberName: 'google',
      description: 'Ce gentil bot fera une recherche google à ta place',
      examples: ['!google <search>']
    });
  }

  run(message) {
    let args = message.content.split(' ')
    args.shift()
    message.delete()
    message.reply('https://www.google.fr/search?q=' + args.join('%20'))
  }
}

module.exports = GoogleCommand
