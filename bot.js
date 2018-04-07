const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.on('message', message => {
     if (message.content === "&help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **&ping** ' ,' **سرعة إتصال البوت** ')
.addField('     **&id**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **&say** ' , '**يكرر الكلام الذي تقولة**')
.addField('     **&info** ' ,' ** معلومات عن السيرفر**')
.addField('     **&avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **معلومة** ' , '**لإظهار معلومة عشوائية**')
.addField('     **لإظهار بعض صور الحيوانات** ' ,' **حيوانات ** ')
.addField('     ** ** ' ,' ** ** ')
.addField('     ** ** ' ,' ** أوآمر الإدآرة ** ')
.addField('     **&kick ** ' ,' ** للطرد  ** ')
.addField('     **&bc ** ' ,' ** للبرودكاست ** ')
.addField('     **&clear** ' , '**لـ مسح الشات** ')
.addField('     **&roles** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('للأستفسار أو الرد على أسئلتكم وأفكـــاركم كلمني على الديسكورد ' , '**! SPARK| |👑#9837**')
.addField('**لدعوة البوت للسيرفر ..**' , '**https://discordapp.com/oauth2/authorize?client_id=431836563379322880&scope=bot&permissions=0**')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content.startsWith("&avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === "&server") {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
    .addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
    .addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
    .addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
    .addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥عدد الاعضــاء",`
    **${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
    
    }
    });



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
