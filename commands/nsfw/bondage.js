const commando = require('discord.js-commando');
const Discord = require('discord.js')
const randomPuppy = require('random-puppy')

class BondageCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'bondage',
      group: 'nsfw',
      nsfw: true,
      memberName: 'bondage',
      description: 'Prends une pause',
      examples: ['!bondage']
    });
  }

  run(message, args) {
    randomPuppy('bondage')
      .then(url => {
        const embed = new Discord.RichEmbed()
          .setTitle("NSFW | Bondage")
          .setColor(0x00AE86)
          .setImage(url)
        message.channel.send({ embed })
      })
    message.delete()
  }
}

module.exports = BondageCommand
