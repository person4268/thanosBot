const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const token = fs.readfileSync("./config/botToken");
const prefix = fs.readFileSync("./config/prefix");

client.on("message", function(msg) {
  if(msg.content.startsWith(prefix + "thanos") && msg.member.hasPermission("MANAGE_MESSAGES")) {
    /* User has executed !thanos and has permissions */
    msg.channel.messages.fetch({limit: 100}).then(function(messages) {
        messagesArrayValues = Object.values(messages.array());
        for(let i=0; i<messagesArrayValues.length; i++) {
           if(i % 2 == 0) /* i is even */ messagesArrayValues[i].delete();
        }
    });
  }
}
client.login(token);
