const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

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
    requestHandler.makeRequest("reddit", "Otterable", false)
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("Loutre")
                    .setColor(0x00AE86)
                    .setImage(json.url)
                message.channel.send({ embed })
            });
  }
}

module.exports = OtterCommand
