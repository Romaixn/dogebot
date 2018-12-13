const commando = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

class CatCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'cat',
      group: 'animals',
      memberName: 'cat',
      description: 'Doge t\'enverra une image mignonne d\'un chat',
      examples: ['!cat']
    });
  }

  run(message, args) {
    randomPuppy('cat')
      .then(url => {
        const embed = new Discord.RichEmbed()
          .setTitle("Chat")
          .setColor(0x00AE86)
          .setImage(url);
          message.channel.send({ embed });
      });
  }
}

module.exports = CatCommand;
