const Discord = require("Discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.SetGame("SnowBot | Bot officiel By Snow_z, !help");
    console.log("Le bot a bien été connecte");
});

bot.login("NDIxMzY5OTk3MzA3MjgxNDE5.DYRiJA.yUU7vZgNWjS7Z_3j764toOYDcvo");
