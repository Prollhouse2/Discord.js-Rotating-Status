const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")

bot.login(config.token)
bot.on('ready', () => {   
 console.log("Loaded up!")
const activities = ['test1', 'test2','test','test3','test4',`${bot.guilds.cache.size} SERVERS`];

  const updateDelay = 5; // in seconds
  let currentIndex = 0;

  setInterval(() => {
    const activity = activities[currentIndex];
    bot.user.setActivity((activity), { type: 'WATCHING' });
      
        // update currentIndex
    // if it's the last one, get back to 0
    currentIndex = currentIndex >= activities.length - 1 
      ? 0
      : currentIndex + 1;
  }, updateDelay * 1000);
});