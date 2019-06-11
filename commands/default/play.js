const commando = require('discord.js-commando');
const YoutubeStream = require('youtube-audio-stream');

class PlayCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'default',
            memberName: 'play',
            description: 'Joue un son sur YouTube dans un channel vocal',
            examples: ['!play <youtube_url>'],
            guildOnly: true,
        });
    }

    async run(message, args) {
        let voiceChannel = message.guild.channels
            .filter(function (channel) {
                return channel.type === "voice";
            })
            .first();
        voiceChannel
            .join()
            .then(function (connection) {
                try {
                    let stream = YoutubeStream(args);
                    connection.playStream(stream).on('end', function () {
                        connection.disconnect();
                    });
                } catch (error) {
                    message.channel.send({
                        embed: {
                            color: (0, 0, 0),
                            title: 'Erreur',
                            description: "Vidéo YouTube introuvable :cry:"
                        }
                    });
                    connection.disconnect();
                }
            });
    }
}

module.exports = PlayCommand;
