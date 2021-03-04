const Discord = require("discord.js");
const CommandHandler = require("wokcommands");
const client = new Discord.Client({
  partials: ["MESSAGE", "REACTION"],
});

const config = require("./config.json");

client.on("ready", () => {
  console.log("Our Discord bot is online");

  new CommandHandler(client, { commandsDir: "commands" });
});

client.login(config.token);
