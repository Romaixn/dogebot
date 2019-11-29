const commando = require('discord.js-commando');
const scrapeIt = require('scrape-it')
const liste = [];

class DefisCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'defis',
      group: 'default',
      memberName: 'defis',
      description: 'Pour avoir la liste des défis',
      examples: ['!defis']
    });
  }

  async run(message) {
    scrapeIt("https://www.nuitdelinfo.com/inscription/defis/liste", {
      defis: {
        listItem: "div.title",
      }
    }).then(({ data, response }) => {
      let i;
      for (i = 0; i < data.defis.length; i++) {
        if (!liste.includes(data.defis[i])) {
          liste.push(data.defis[i])
          message.channel.send({
            embed: {
              color: 0xFF0000,
              title: 'Défi n°' + (i + 1),
              description: data.defis[i]
            }
          })
        }
      }
      message.delete()
    })
  }
}

module.exports = DefisCommand
