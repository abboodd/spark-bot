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
     if (message.content === "T~help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **T~ping** ' ,' **سرعة إتصال البوت** ')
.addField('     **T~id**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **T~say** ' , '**يكرر الكلام الذي تقولة**')
.addField('     **T~info** ' ,' ** معلومات عن السيرفر**')
.addField('     **T~avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **معلومة** ' , '**لإظهار معلومة عشوائية**')
.addField('     **لإظهار بعض صور الحيوانات** ' ,' **حيوانات ** ')
.addField('     ** ** ' ,' ** ** ')
.addField('     ** ** ' ,' ** أوآمر الإدآرة ** ')
.addField('     **T~kick ** ' ,' ** للطرد  ** ')
.addField('     **T~bc ** ' ,' ** للبرودكاست ** ')
.addField('     **T~clear** ' , '**لـ مسح الشات** ')
.addField('     **T~roles** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('للأستفسار أو الرد على أسئلتكم وأفكـــاركم كلمني على الديسكورد ' , '**! ҜṦẰ - KBOOSH - كبوش—Ƴ丅 0.3K#3128**')
.addField('**لدعوة البوت للسيرفر ..**' , '**https://discordapp.com/oauth2/authorize?client_id=345157648531849216&scope=bot&permissions=0**')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
