const commando = require('discord.js-commando');
const Discord = require('discord.js');
const requestHandler = require('../../utils/reddit.js');

class PornCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'porn',
            group: 'nsfw',
            nsfw: true,
            memberName: 'porn',
            description: 'Prends une pause',
            examples: ['!porn']
        });
    }

    run(message, args) {
        let subreddits = ["girlsinyogapants", "Thighs", "thighhighs", "ThickThighs", "UnderwearGW", "datgap", "leggingsgonewild", "pawg", "hipcleavage", "legs", "pantyhose", "ass", 
        "paag", "asstastic", "buttplug", "whooties", "AssholeBehindThong", "Frogbutt", "rearpussy", "CuteLittleButts", "HungryButts", "reversecowgirl", "facedownassup", 
        "butt", "butts", "pawg", "bigasses", "cosplaybutts", "BubbleButts", "assinthong", "smalltitsbigass", "CelebrityButts", "booty", "panties", "FullBackPanties", "PantiesToTheSide",
        "thongs", "xsmallgirls", "PublicSexPorn", "cameltoe", "smallboobs", "LegalTeens", "TooCuteForPorn", "adorableporn", "AsiansGoneWild", "trashyboners", "StraightGirlsPlaying", 
        "LipsThatGrip", "spreadeagle", "dirtysmall", "nsfw", "pussy", "gonewild", "SexyTummies", "SpreadEm", "Ahegao_IRL", "nsfwcosplay", "RealGirls", "lesbians", "Fingering", "AnalGW",
        "anal", "freeuse", "BorednIgnored", "grool", "jilling", "porn", "Amateur", "TinyTits", "PetiteGoneWild", "cumsluts", "AsianHotties", "simps", "slimgirls", "ginger", "palegirls", 
        "BustyPetite", "Innie"];
        requestHandler.makeRequest("reddit", subreddits[Math.floor(Math.random() *subreddits.length)])
            .then(json => {
                const embed = new Discord.RichEmbed()
                    .setTitle("NSFW | Porn")
                    .setColor(0x00AE86)
                    .setImage(json.url);
                message.channel.send({ embed })
            }).catch(error => {
                console.log(error);
            });
        message.delete();
    }
}

module.exports = PornCommand;
