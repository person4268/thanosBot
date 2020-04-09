const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const configJson = JSON.parse(fs.readFileSync("./config.json"));
const prefix = configJson.prefix;
const token = configJson.token

client.on("message", function(msg) {
  if(msg.content.startsWith(prefix + "thanos") && msg.member.hasPermission("MANAGE_MESSAGES")) {
    /* User has executed !thanos and has permissions */
    msg.channel.messages.fetch({limit: 100}).then(function(messages) {
        messagesArrayValues = Object.values(messages.array());
        for(let i=0; i<messagesArrayValues.length; i++) {
           if(i % 2 == 0) {
             messagesArrayValues[i].delete(); 
           }
        }
    });
  }
});
client.login(token);
