const commando = require('discord.js-commando');
const config = require('./config')

class DiceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'games',
      memberName: 'roll',
      description: 'Lance un dé',
      examples: ['!roll']
    });
  }

  run(message) {
    var roll = Math.floor(Math.random() * 6) + 1
    message.channel.send({
      embed: {
        color: config.embedColor,
        title: 'Dé | ' + message.author.username,
        description: 'Tu as obtenu un ' + roll
      }
    })
  }
}

module.exports = DiceRollCommand
