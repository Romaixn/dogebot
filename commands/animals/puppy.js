const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

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
    requestHandler.makeRequest("reddit", "puppy", false)
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("Puppy")
                    .setColor(0x00AE86)
                    .setImage(json.url)
                message.channel.send({ embed })
            });
  }
}

module.exports = PuppyCommand
