const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'r-help') {
    msg.reply('تم ارسال الاوامر في الخاص!');
  }
});

client.on("message", message => {
 if (message.content === "r-help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

***__وصف عن البوت__***
**
....
متعدد الميزات و الاوامر فيه اوامر جميله
سرعه اتصال ممتازه
سهل الاستخدام
مجاني بل كامل 
بوت عربي
**

        ***__General orders__***
**
『r-id / معلومات عن حسابك』
『roles / يعرض لك الرتب و عددها』
『rooms / يعرض لك الرومات وعددها』
『server / معلومات عن السيرفر』
『animal / يعطيك صور حيوانات』
『image / يعرض صوره السيرفر』
『avatar / يعرض صورتك او صوره شخص』
『time / يعرض لك الوقت』
『date / يعرض لك التاريخ』
『dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
**

        ***__Bot orders__***
**
『ping / يعرض لك سرعه اتصال البوت』
『uptime / يعرض لك صار للبوت كم شغال』
『support / سيرفر الدعم القني و المساعده』
『invite / اضافه البوت』
『members / حاله الاعضاء』
『bot / معلومات عن البوت』
**

        ***__Administrative Orders__***
**
『kick / كيك』
『ban / بان』
『mute /ميوت』
『unmute /فك الميوت』
『mutechannel /قفل الشات』
『unmutechannel /فتح الشات』
f!add.r
『delet / مسح روم』
『color 50 /انشاء 50 لون』
『color 100/انشاء 100 لون』
『color 140/انشاء 140 لوم』
『ct /انشاء روم كتابي』
『cv /انشاء روم صوتي』
『bc /برودكاست』
**
        
`)


message.author.sendEmbed(embed)

}
}); 

  

         


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

