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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);


const hokom = [   '*** منشن الجميع وقل انا اكرهكم. ***','*** اتصل على امك و قول لها انك تحبها :heart:. ***',   '***     تصل على الوالده  و تقول لها  احب وحده.***',   '*** تتصل على شرطي تقول له عندكم مطافي.***',   '*** صور اي شيء يطلبه منك الاعبين.***',   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',   '***  تروح عند شخص تقول له احبك. ***',   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',   '*** ذي المرة لك لا تعيدها.***',   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',   '***سو مشهد تمثيلي عن مصرية بتولد.***',   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***']
client.on('message', message => {
if (message.content.startsWith(prefix + 'حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبه حكم")
  .setColor('RANDOM')
  .setDescription(`${hokom[Math.floor(Math.random() * hokom.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});

