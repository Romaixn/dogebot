const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const config = require('./config.json');

const bot = new CommandoClient({
    owner : config.owner,
    commandPrefix: config.defaultPrefix,
    unknownCommandResponse: false,
    disableEveryone: true
});
const path = require('path');

const sqlite = require('sqlite');

sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    bot.setProvider(new SQLiteProvider(db));
});

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['games', 'Commandes jeux'],
        ['default', 'Commandes basiques'],
        ['animals', 'Commandes animaux'],
        ['economy', 'Commandes économies'],
        ['nsfw', 'Commandes NSFW']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        prefix: false,
        eval: false
    })
    //.unknownCommand()
    .registerCommandsIn(path.join(__dirname, 'commands'));

// Initialisation du BOT
bot.on('ready', () => {
    console.log("---------- DOGE BOT CONNECTED ----------");
    bot.user.setActivity("zizi-couilles.fr");
});

bot.login(config.tokenDev);
