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
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا اسرفر **`)
    }

});
\\



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
