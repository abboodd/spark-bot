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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
