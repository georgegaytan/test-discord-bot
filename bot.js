require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const ADMIN_ME_COMMAND = "admin-me";

client.on("ready", () => {
  console.log("Our discord bot is ready");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("STOP Deleting Messages >:(");
});

client.on("message", (msg) => {
  if (msg.content == `${BOT_PREFIX}ping`) {
    msg.channel.send("Pong");
  }
  if (msg.content == `${BOT_PREFIX}heart`) {
    msg.react("❤️");
  }
  if (msg.content == `${BOT_PREFIX}${ADMIN_ME_COMMAND}`) {
    adminUser(msg.member);
  }
});

function adminUser(member) {
  member.roles.add("793952355678289950");
}

client.login(process.env.BOT_TOKEN);
