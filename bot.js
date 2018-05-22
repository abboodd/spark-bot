const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'r-help') {
    msg.reply('تم ارسال الاوامر في الخاص');
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

  
   var prefix = 'r-';
client.on('message', message => {
  if (message.content.startsWith(prefix + "id")) {
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات :x:`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL)
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")
    message.channel.sendEmbed(id);
})
}
     });
         


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

