const commando = require('discord.js-commando');
const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

class OtterCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'otter',
      group: 'animals',
      memberName: 'otter',
      description: 'Doge t\'enverra une image mignonne d\'une PUTAIN de loutre',
      examples: ['!otter']
    });
  }

  run(message, args) {
    randomPuppy('Otterable')
      .then(url => {
        const embed = new Discord.RichEmbed()
          .setTitle("Loutre")
          .setColor(0x00AE86)
          .setImage(url)
        message.channel.send({ embed })
      })
  }
}

module.exports = OtterCommand
