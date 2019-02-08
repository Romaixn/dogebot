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
    console.log(`${bot.user.username} est connecté, avec ${bot.users.size} utilisateurs, dans ${bot.channels.size} channel de ${bot.guilds.size} serveurs.`);
    bot.user.setActivity(`Connecté à ${bot.guilds.size} serveurs`);
});

// Quand le bot rejoint un serveur
bot.on("guildCreate", guild => {
    console.log(`Nouveau serveur : ${guild.name} (id: ${guild.id}). Ce serveur a ${guild.memberCount} membres!`);
    bot.users.get(config.owner).send(`Nouveau serveur : ${guild.name} (id: ${guild.id}). Ce serveur a ${guild.memberCount} membres!`)
    bot.user.setActivity(`Connecté à ${bot.guilds.size} serveurs`);
});

// Quand le bot quitte un serveur
bot.on("guildDelete", guild => {
    console.log(`J'ai été supprimé de ${guild.name} (id: ${guild.id})`);
    bot.users.get(config.owner).send(`J'ai été supprimé de ${guild.name} (id: ${guild.id})`)
    bot.user.setActivity(`Connecté à ${bot.guilds.size} serveurs`);
});

bot.on('error', error => {
    bot.users.get(config.owner).send(`HELP ${guild.name}`);
});

bot.login(config.tokenDev);
