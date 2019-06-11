const commando = require("discord.js-commando");
const Discord = require("discord.js")
const request = require("request");

class IpLocateCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "iplocate",
      group: "default",
      memberName: "iplocate",
      description: "Renvoie la localisation d'une adresse IP",
      examples: ["!iplocate 176.123.258.64"],
    });
  }

  async run(message, args) {
    request(
      {
        url: `https://api.kwelo.com/v1/network/ip-address/location/${args}`,
        json: true
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          var continent = body['data']['geolocation']['continent']['names']['fr']
          var country = body['data']['geolocation']['country']['names']['fr']
          const embed = new Discord.RichEmbed()
            .setTitle("IP Locate")
            .setColor(0x3498DB)
            .addField("Continent : ", continent, true)
            .addField("Pays : ", country, true);
          message.channel.send({ embed });
        }
      }
    );
  }
}

module.exports = IpLocateCommand;
