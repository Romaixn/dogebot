const commando = require('discord.js-commando');
const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

class PuppyCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'puppy',
      group: 'animals',
      memberName: 'puppy',
      description: 'Doge t\'enverra une image mignonne d\'un chiot',
      examples: ['!puppy']
    });
  }

  run(message, args) {
    randomPuppy()
      .then(url => {
        const embed = new Discord.RichEmbed()
          .setTitle("Puppy")
          .setColor(0x00AE86)
          .setImage(url)
        message.channel.send({ embed })
      })
  }
}

module.exports = PuppyCommand
