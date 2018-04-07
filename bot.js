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
.addField('     **&server** ' ,' ** معلومات عن السيرفر**')
.addField('     **&avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **معلومة** ' , '**لإظهار معلومة عشوائية**')
.addField('     **لإظهار خواطر** ' ,' **خواطر ** ')
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

const secreT = [ "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.", "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.", "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.", "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.", "**ان تعالج ألمك بنفسك تلك هى القوة**.",  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",  "**المناقشات العقيمة لا تنجب افكارا**.",  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", ]


client.on('message', message => {
  if (message.content.startsWith("$خواطر")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
 `${secreT[Math.floor(Math.random() * secreT.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
