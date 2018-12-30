const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const prefix = 'p*';
const ms = require("ms");

client.on('ready', () => {
  client.user.setGame('p*help | p*invite','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
	
	client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('p*bcall')){
 if(!message.author.id === '528390233499107338') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', msg => {
    if (msg.content === '<@528390233499107338>') {
      msg.channel.sendMessage('يمديك تكتب بس p*help')
    }
  });

client.on('message', msg => {
  if (msg.content === 'Version') {
    msg.channel.sendMessage('0.0.1.7!')
  }
});
	
client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});


client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

	
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 
 
 
 ╭━━━╮╱╱╱╱╱╭━╮╱╱╱╱╱╭╮╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱┃╭╯╱╱╱╱╭╯╰╮┃╭╮┃╱╱╭╯╰╮
┃╰━╯┣━━┳━┳╯╰┳━━┳━┻╮╭╯┃╰╯╰┳━┻╮╭╯
┃╭━━┫┃━┫╭┻╮╭┫┃━┫╭━┫┃╱┃╭━╮┃╭╮┃┃
┃┃╱╱┃┃━┫┃╱┃┃┃┃━┫╰━┫╰╮┃╰━╯┃╰╯┃╰╮
╰╯╱╱╰━━┻╯╱╰╯╰━━┻━━┻━╯╰━━━┻━━┻━╯

 
 
 **
Made By <@489818677902966806> 
╔[❖════════════❖]╗
             Prefix = ' p* '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

 ❖ p*kick <mention > ➾ kick member from server

 ❖ p*clear ➾ clear chat with react
 
 ❖ p*mute < mention > ➾ mute member

 ❖ p*unmute <mention> ➾ unmute member

 ❖ p*ct <name> ➾ create channel

 ❖ p*cv <name> create voice channel
  
 ❖ p*bc <message> ➾ message all members in server with react


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝

❖ p*roll <number> ➾ role 

❖ p*date ➾ see date

❖ p*member ➾ members info

❖ p*ser-av ➾ server avatar

❖ p*uptime ➾ to see uptime

❖ p*invs ➾ server invite link

❖ p*own ➾ bot owner

❖ p*id ➾ your id

❖ p*avatar ➾ your avatar account

❖ p*help-ar ➾ help by arabic

❖ p*help-en ➾ help by english

❖ p*ping ➾ to see ping

❖ p*bot ➾ bot informations 

❖ p*server ➾ server informations 

❖ p*invite ➾ bot invite link

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "-wlc-"


==================================================================

Server support: https://discord.gg/3jB6aMz


==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=528390233499107338&permissions=8&scope=bot

==================================================================

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 message.channel.send('**تم ارسالك في الخاص**');
            
	
		 


 message.author.sendMessage(`
 
 
 
 ╭━━━╮╱╱╱╱╱╭━╮╱╱╱╱╱╭╮╱╭━━╮╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱┃╭╯╱╱╱╱╭╯╰╮┃╭╮┃╱╱╭╯╰╮
┃╰━╯┣━━┳━┳╯╰┳━━┳━┻╮╭╯┃╰╯╰┳━┻╮╭╯
┃╭━━┫┃━┫╭┻╮╭┫┃━┫╭━┫┃╱┃╭━╮┃╭╮┃┃
┃┃╱╱┃┃━┫┃╱┃┃┃┃━┫╰━┫╰╮┃╰━╯┃╰╯┃╰╮
╰╯╱╱╰━━┻╯╱╰╯╰━━┻━━┻━╯╰━━━┻━━┻━╯

 
 
 
 
 
 **
Made By <@489818677902966806> 
╔[❖════════════❖]╗
                  Prefix = ' p* '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝

 ❖  p*kick <mention > ➾ لطرد عضو
 
 ❖ p*mute < mention > ➾ اسكات عضو 

 ❖ p*clear  ➾ لحذف روم بالتكيد عن طريق الايمجي

 ❖ p*cv <name> ➾ صنع روم صوتية

 ❖ p*ct <name> ➾ صنع روم كتابية

 ❖ p*unmute <mention> ➾ فك الاسكات من العضو
  
 ❖ p*bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر مع الايموجي للتاكيد


╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ p*roll <number> ➾ قرعة

❖ p*member ➾ معلومات الاعضاء

❖ p*avatar ➾ شعار حسابك

❖ p*ser-av ➾ شعار السيرفر

❖ p*uptime ➾ مدة التشغيل

❖ p*id ➾ اي دي

❖ p*date ➾ التاريخ

❖ p*invs ➾ رابط دخول سيرفرك

❖ p*own ➾ مسؤول البوت

❖ p*help-ar ➾ المساعدة في العربي

❖ p*help-en ➾ المساعدة في الانجليزي

❖ p*ping ➾ عرض سرعه اتصال البوت

❖ p*bot ➾ معلومات البوت

❖ p*server ➾ معلومات السيرفر

❖ p*invite ➾ رابط دعوة البوت

❖ p*support ➾ رابط سيرفر السبورت

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "wlc"

==================================================================

Server support: https://discord.gg/3jB6aMz


bot invite link: https://discordapp.com/oauth2/authorize?client_id=528390233499107338&permissions=8&scope=bot

==================================================================


`);

    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "invs")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيرفرك ",'رابط صوره سيرفرك')
                   .setTimestamp()
				message.channel.send('**تم الارسال في الخاص**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
Made By <@489818677902966806>

 __Powered By__:<@489818677902966806>

Server Support : https://discord.gg/3jB6aMz

Invites Bot : https://discordapp.com/oauth2/authorize?client_id=528390233499107338&permissions=8&scope=bot

`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
Made By <@489818677902966806>
 
بامكانك دعوة البوت من هنا

https://discordapp.com/oauth2/authorize?client_id=528390233499107338&permissions=8&scope=bot

Server Support : https://discord.gg/3jB6aMz
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "support") {


 message.author.sendMessage(`
 
Made By <@489818677902966806>

Server Support : https://discord.gg/3jB6aMz

Invites Bot : https://discordapp.com/oauth2/authorize?client_id=528390233499107338&permissions=8&scope=bot

`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


  

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "p*mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "p*unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});


client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "p*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });


client.on('message', message => {
     if (message.content === "p*bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});


    
            
	     
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='p*member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	    
                        message.channel.send('**Choose**: p*help-ar ➾ arabic | p*help-en ➾ english');

    }
});


client.on("guildDelete", guild => {
console.log(`**Perfect Bot** Leave From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
client.channels.get("528758097657724948").send('**Perfect Bot** ``Kicked`` From Server - -- = '+`**${guild.name}**`+' = -- '+'**Server Owner** -- =' +`**${guild.owner.user.username}**` +'= --')
});

client.on('guildCreate', guild => {
client.channels.get("528758097657724948").send('**Perfect Bot** ``Joind`` In Server - -- = '+`**${guild.name}**`+' = -- '+'**Server Owner** -- =' +`**${guild.owner.user.username}**` +'= --')
});








client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`
  **شكراً لك لإضافه البوت الى سيرفرك**
  
  للمزيد من المعلومات منشن البوت
  `)
      guild.owner.send(embed)
});

client.on('message', message => {
    var prefix = "p*"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

  
client.on("message", (message) => {
if (message.content.startsWith("p*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("p*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });

client.on('message', message => {
    if (message.content.startsWith("p*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Perfect Bot','')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`Perfect Bot`, '')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});

client.on("message", msg => {
  if(msg.content === 'p*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});


    client.on('message', message => {
	if (message.content.startsWith(prefix + "all-s")) {
			 if(!message.author.id === '337159059788791808') return;
	var gimg;
	var gname;
	var gmemb;
	var gbots;
	var groles;
	var servers = client.guilds;
	servers.forEach((g)=>{
	gname = g.name;
	gimg = g.iconURL;
	gmemb = g.members.size;
	gbots = g.members.filter(m=>m.bot).size;
	groles = g.roles.map(r=> {return r.name});
	let serv = new Discord.RichEmbed()
	.setAuthor(gname,gimg)
	.setThumbnail(gimg)
	.addField('Server bots',gbots)
	.addField('Server Member Count',gmemb = g.members.size)
	.setColor('RANDOM')
	message.channel.send(`
	Server Name : **${gname}**
	Server MemberCount : **${gmemb} **
			`);
		  message.channel.sendEmbed(serv);
	}) 
	}
	});
    
client.on('message', message => {
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'clear')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  message.channel.send(`هل انت موافق على مسح الشات؟`).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))


  let none = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let yes = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

  let hayes = msg.createReactionCollector(yes, { time: 15000 });
  let hanone = msg.createReactionCollector(none, { time: 15000 });

  hayes.on("collect", r => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('  ⚠  ** **');
         var msg;
         msg = parseInt();

       message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
       message.channel.sendMessage("", {embed: {
         title: "Done | تــم",
         color: 0x06DF00,
         description: "تم مسح الرسائل بنجاح",
         footer: {
           text: `تم المسح بواسطة ${message.author.username}`
         }
       }}).then(msg => {msg.delete(3000)});
                           

      

     hanone.on("collect", r => {

          message.channel.send(`**تم التراجع عن مسح الشات**`).then(m => m.delete(5000));

          })



                              })
                              })
                              }
                              });
                              
                              
                              


                            client.on('ready', () => {
                                console.log('---------------');
                                console.log(' premium Is Online')
                                console.log('---------------')
                              });
                            
                            
                              const premium = ['489818677902966806'];
                                  
                            client.on('message', message => {
                            if(message.content === prefix + "prhelp-ar") {
                    
                            
                                  if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                      message.channel.send(`**${message.author.username}**
                            
                            هلا وغلى سمعت تبي تعرف الكوماندات حقتك
                            
                            ابشرك لو ما تدري 
                            انت مشترك اشتراك برميوم يعني
                            انت شاري او جتك هدية برميوم للبوت
                            اشتراك [شهري,3 اشهر,سنوي] استمتع !!
                            
                            يمكنك التعرف على مميزاتك عن طريق الدعم الخاص بنا
                            https://discord.gg/3jB6aMz
                            
                            
                            
                            اي سؤال اسال هناك
                            
                            
                            الاومر موجودة بس اسالنا هناك
                            
                            `)
            
                            
                               }
                              
                              });

                                                         
                            client.on('message', message => {
                                if(message.content === prefix + "prhelp-en") {
                                    if(!premium.includes(message.author.id)) return message.channel.send(`**Premium Only**`).then(m => m.delete(5000));
                                          message.channel.send(`**${message.author.username}**
                                
                               Hello Sir, I heared You Want To see Commands Of Bot
                                
                             I'm Coming To Tell You 
                               You Are Subscribing To Premium Bot
                              Your Purchase Of Gifted Premuim For Bot
                              Subscribe [Monthly,3 Month, Yearly] Have Fun !!
                              You can recognize your features with our support

                                 https://discord.gg/3jB6aMz
                                                                
                                 Any question I ask there
                                
                                
                                 The orders are still there and come and ask us what they are                                
                                `)
                
                                
                                   }
                                  
                                  });
                                
                                
                            
                                
                                  client.on('message', message => {
                                    if(!message.channel.guild) return                                 
                                if(message.content.startsWith(prefix + 'bc')) {
                                    if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
                                if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
                                let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                                let request = `Requested By ${message.author.username}`;
                                if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
                                msg.react('✅')
                                .then(() => msg.react('❌'))
                                .then(() =>msg.react('✅'))
                            
                                let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                                let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                                 
                                let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                                let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
                                reaction1.on("collect", r => {
                                message.channel.send(`☑ | تم الارسال ل  ${message.guild.members.size} عضو`).then(m => m.delete(5000));
                                message.guild.members.forEach(m => {
                                var bc = new
                                Discord.RichEmbed()
                                .setColor('RANDOM')
                                .setTitle('Broadcast')
                                .addField('Server', message.guild.name)
                                .addField('Sender', message.author.username)
                                .addField('Message', args)
                                .setThumbnail(message.author.avatarURL)
                                m.send({ embed: bc })
                                msg.delete();
                                })
                                })
                                reaction2.on("collect", r => {
                                message.channel.send(`**تم الغاء البرود كاست.**`).then(m => m.delete(5000));
                                msg.delete();
                                })
                                })
                                }
                                });                            
                                
                            
                            
                            
                            
                            //اغاني
                              console.log(`Music Ready `);
                            
                            /*
                            ////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
                            ////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
                            ////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
                            ////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
                            */
                  
                            
                            
                            
const Util = require('discord.js');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();


const gif = require("gif-search");



var adminprefix = 'p*'
/////////////////////////
////////////////////////


/////////////////////////
////////////////////////
//////////////////////


client.on('message', async msg => {
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;

    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');

	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
        if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
		const voiceChannel = msg.member.voiceChannel;

        if (!voiceChannel) return msg.channel.send("انت لم تدخل روم صوتي");

        const permissions = voiceChannel.permissionsFor(msg.client.user);

        if (!permissions.has('CONNECT')) {

			return msg.channel.send("ليست لدي صلاحيات للدخول الى الروم");
        }

		if (!permissions.has('SPEAK')) {

			return msg.channel.send("انا لا يمكنني التكلم في هاذه الروم");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("انا لا املك صلاحيات ارسال روابط")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();


			for (const video of Object.values(videos)) {

                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);

			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)

					.setColor("#ff0000")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})

/////////////////
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم اختيار الاغنية');
                    }

					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

				} catch (err) {

					console.error(err);
					return msg.channel.send("لم اجد نتائج!");
				}
			}

            return handleVideo(video, msg, voiceChannel);

        }

	} else if (command === `skip`) {
        if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
        if (!serverQueue) return msg.channel.send("ليست هناك اغاني ليتم التخطي");

		serverQueue.connection.dispatcher.end('تم تخطي الاغنية');
        return undefined;

	} else if (command === `stop`) {
        if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");

		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم ايقاف الاغنية لقد خرجت من الروم الصوتي');
        return undefined;

	} else if (command === `vol`) {
        if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));

		if (!msg.member.voiceChannel) return msg.channel.send("يجب ان تكون في روم صوتي");
		if (!serverQueue) return msg.channel.send('يعمل الامر فقط عند تشغيل مقطع صوتي');
        if (!args[1]) return msg.channel.send(`لقد تم تغير درجة الصوت الى**${serverQueue.volume}**`);

		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);

        return msg.channel.send(`درجة الصوت الان**${args[1]}**`);

	} else if (command === `np`) {
        if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
			.setColor("#ff0000")
        return msg.channel.sendEmbed(embedNP);

	} else if (command === `queue`) {
        if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));

		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#ff0000")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم الايقاف');
		}
		return msg.channel.send('في انتظار تشغيل المقطع');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('تم التشغيل');

		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);


	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, تمت اضافة المقطع الى قائمة الانتظار `);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, الان يتم تشغيل`);
}


client.on('message', message => {
    if (message.content === 'p*prhelp-ar') {
        if(!premium.includes(message.author.id)) return;
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**أوامر الميوزك...**')
        .setDescription('**برفكس البوت (p*)**')
        .addField('play', 'لتشغيل اغنية')
        .addField('join', 'دخول رومك الصوتي')
        .addField('disconnect', 'الخروج من رومك الصوتي')
        .addField('skip', 'تخطي الأغنية')
        .addField('pause', 'ايقاف الاغنية مؤقتا')
        .addField('resume', 'تكملة الاغنية')
        .addField('queue', 'اظهار قائمة التشغيل')
        .addField('np', 'اظهار الاغنية اللي انت مشغلها حاليا')
				.setColor("#ff0000")
        message.author.send(helpEmbed);
    }
});


client.on('message', message => {
    if (message.content === 'p*prhelp-en') {
        if(!premium.includes(message.author.id)) return;
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**Music Commands...**')
        .setDescription('**Prefix Of Bot (p*)**')
        .addField('play', 'To Play Song')
        .addField('join', 'For Join Your Voice Channel')
        .addField('disconnect', 'For Leave Your Voice Channel')
        .addField('skip', 'Skip Song')
        .addField('pause', 'Pause The Music For a little Time')
        .addField('resume', 'resume The Music')
        .addField('queue', 'To See The Queue')
        .addField('np', 'To Know What Music Playing Now')
				.setColor("#ff0000")
     message.author.send(helpEmbed);
    }
});





                            
                            
                            
                            
                            
                            //اومر الكونسل و البوت//
                            
                            
                            
                            
                            
                            client.on("guildCreate", guild => {
                              console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
                            });
                            
                            client.on('ready',  () => {
                              console.log('تم تشغيل :البرميوم  ');
                              console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
                              console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
                              console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
                            });
                            
                            
                                              
                                                const Sra7a = [
                                                    'صراحه  |  صوتك حلوة؟',
                                                    'صراحه  |  التقيت الناس مع وجوهين؟',
                                                    'صراحه  |  شيء وكنت تحقق اللسان؟',
                                                    'صراحه  |  أنا شخص ضعيف عندما؟',
                                                    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
                                                    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
                                                    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
                                                    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
                                                    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
                                                    'صراحه  |  أشجع شيء حلو في حياتك؟',
                                                    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
                                                    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
                                                    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
                                                    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
                                                    'صراحه  |  نظرة و يفسد الصداقة؟',
                                                    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
                                                    'صراحه  |  شخص معك بالحلوه والمُره؟',
                                                    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
                                                    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
                                                    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
                                                    'صراحه  |  ابيع المجرة عشان؟',
                                                    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
                                                    'صراحه  |  مع مين ودك تنام اليوم؟',
                                                    'صراحه  |  صدفة العمر الحلوة هي اني؟',
                                                    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
                                                    'صراحه  |  صفة تحبها في نفسك؟',
                                                    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
                                                    'صراحه  |  تصلي صلواتك الخمس كلها؟',
                                                    'صراحه  |  ‏تجامل أحد على راحتك؟',
                                                    'صراحه  |  اشجع شيء سويتة بحياتك؟',
                                                    'صراحه  |  وش ناوي تسوي اليوم؟',
                                                    'صراحه  |  وش شعورك لما تشوف المطر؟',
                                                    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
                                                    'صراحه  |  ما اكثر شي ندمن عليه؟',
                                                    'صراحه  |  اي الدول تتمنى ان تزورها؟',
                                                    'صراحه  |  متى اخر مره بكيت؟',
                                                    'صراحه  |  تقيم حظك ؟ من عشره؟',
                                                    'صراحه  |  هل تعتقد ان حظك سيئ؟',
                                                    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
                                                    'صراحه  |  كلمة تود سماعها كل يوم؟',
                                                    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
                                                    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
                                                    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
                                                    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
                                                    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
                                                    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
                                                    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
                                                    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
                                                    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
                                                    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
                                                    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
                                                    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
                                                     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
                                                    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
                                                    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
                                                    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
                                                    '‏صراحه  |  ما هو عمرك الحقيقي؟',
                                                    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
                                                    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
                                               ]
                                                  client.on('message', message => {
                                                if (message.content.startsWith('p*صراحه')) {
                    if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                                    if(!message.channel.guild) return message.reply('** This command only for servers **');
                                                 var client= new Discord.RichEmbed()
                                                 .setTitle("لعبة صراحة ..")
                                                 .setColor('RANDOM')
                                                 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
                                                 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                                                                 .setTimestamp()
                                               
                                                  message.channel.sendEmbed(client);
                                                  message.react("??")
                                                }
                                               });
                                               
                                               
                                               const Za7f = [
                                                   "**صورة وجهك او رجلك او خشمك او يدك**.",
                                                   "**اصدر اي صوت يطلبه منك الاعبين**.",
                                                   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
                                                   "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
                                                   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
                                                   "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
                                                   "**ذي المرة لك لا تعيدها**.",
                                                   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
                                                   "**صور اي شيء يطلبه منك الاعبين**.",
                                                   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
                                                   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
                                                   "**سو مشهد تمثيلي عن مصرية بتولد**.",
                                                   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
                                                   "**ذي المرة لك لا تعيدها**.",
                                                   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
                                                   "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
                                                   "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
                                                   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
                                                   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
                                                   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
                                                   "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
                                                   "**اتصل على امك و قول لها انك تحبها :heart:**.",
                                                   "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
                                                   "**قل لواحد ماتعرفه عطني كف**.",
                                                   "**منشن الجميع وقل انا اكرهكم**.",
                                                   "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
                                                   "**روح المطبخ و اكسر صحن او كوب**.",
                                                   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
                                                   "**قول لاي بنت موجود في الروم كلمة حلوه**.",
                                                   "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
                                                   "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
                                                   "**قول قصيدة **.",
                                                   "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
                                                   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
                                                   "**اول واحد تشوفه عطه كف**.",
                                                   "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
                                                   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
                                                   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
                                                   "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
                                                   "**تاخذ عقابين**.",
                                                   "**قول اسم امك افتخر بأسم امك**.",
                                                   "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
                                                   "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
                                                   "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
                                                   "**تتصل على الوالده  و تقول لها خطفت شخص**.",
                                                   "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
                                                   "**����تصل على الوالده  و تقول لها  احب وحده**.",
                                                     "**تتصل على شرطي تقول له عندكم مطافي**.",
                                                     "**خلاص سامحتك**.",
                                                     "** تصيح في الشارع انا  مجنوون**.",
                                                     "** تروح عند شخص تقول له احبك**.",
                                                 
                                               ]
                                               
                                               
                                                client.on('message', message => {
                                                  if (message.content.startsWith("p*عقاب")) {
                                                    
                                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                                                 var embed = new Discord.RichEmbed()
                                                 .setColor('RANDOM')
                                                  .setThumbnail(message.author.avatarURL) 
                                                .addField('WOlF BOT' ,
                                                 `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
                                                 message.channel.sendEmbed(embed);
                                                 console.log('[38ab] Send By: ' + message.author.username)
                                                   }
                                               });
                                               
                                               
                                              
                                               var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
                                                   client.on('message', message => {
                                                       var args = message.content.split(" ").slice(1);
                                                   if(message.content.startsWith(prefix + 'لو خيروك')) {
                                                        var cat = new Discord.RichEmbed()
                                               .setImage(rebel[Math.floor(Math.random() * rebel.length)])
                                               message.channel.sendEmbed(cat);
                                                   }
                                               });
                                               
                                               
                                               
                                                const cuttweet = [
                                                    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
                                                    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
                                                    'كت تويت | الحرية لـ ... ؟',
                                                    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
                                                    'كت تويت ‏| كلمة للصُداع؟',
                                                    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
                                                    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
                                                    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
                                                    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
                                                    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
                                                    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
                                                    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
                                                    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
                                                    '‏كت تويت | وش يفسد الصداقة؟',
                                                    '‏كت تويت | شخص لاترفض له طلبا ؟',
                                                    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
                                                    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
                                                    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
                                                    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
                                                    '‏كت تويت |أقوى كذبة مشت عليك ؟',
                                                    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
                                                    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
                                                    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
                                                    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
                                                    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
                                                    '‏كت تويت | مطلبك الوحيد الحين ؟',
                                                    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
                                               ]
                                               
                                                client.on('message', message => {
                                                  if (message.content.startsWith("p*كت تويت")) {
                      if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                                                 var embed = new Discord.RichEmbed()
                                                 .setColor('RANDOM')
                                                  .setThumbnail(message.author.avatarURL) 
                                                .addField('لعبه كت تويت' ,
                                                 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
                                                 message.channel.sendEmbed(embed);
                                                 console.log('[id] Send By: ' + message.author.username)
                                                   }
                                               });
                                               
                                               const secreT = [
                                                 "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
                                                 "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
                                                 "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
                                                 "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
                                                 "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
                                                 "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
                                                 "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
                                                 "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
                                                 "**المناقشات العقيمة لا تنجب افكارا**.", 
                                                 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
                                                 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
                                               ]
                                               
                                               
                                                client.on('message', message => {
                                                  if (message.content.startsWith("p*خواطر")) {
                      if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
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
                                               
                                               
                                               
                                               
                                               const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]
                                               
                                               
                                                client.on('message', message => {
                                                  if (message.content.startsWith("p*حب")) {
                      if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                                                 var embed = new Discord.RichEmbed()
                                                 .setColor('RANDOM')
                                                  .setThumbnail(message.author.avatarURL) 
                                                .addField('Diso Bot' ,
                                                 `${Love[Math.floor(Math.random() * Love.length)]}`)
                                                 message.channel.sendEmbed(embed);
                                                 console.log('[id] Send By: ' + message.author.username)
                                                   }
                                               });
                                               
                                               
                                               
                                               console.log('mariam ra7t tmot al nas');
                                               client.on('ready', () => {
                                                 console.log(`im redey`);
                                               });
                                               const zead = [
                                                  '*** انا اسمي مريم ***',
                                                  '*** مرحباَ ماهو اسمك ؟ ***',
                                                  `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
                                                  '*** هل تود مساعدتي ؟ ***',
                                                  '*** لماذا هل انت قاسي القلب ؟ ***',
                                                  '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
                                                  '*** ابتعد عني قليل انني متعبة ***',
                                                  '*** هل انت نادم على ماقلت ؟ ***',
                                                  '*** ابتعد عني قليل انني متعبة ***',
                                                  '*** هل انت نادم على ماقلت ؟ ***',
                                                  '*** هل تود مساعدتي ؟ ***',
                                                  '*** واو اشكرك انك شخصاَ رائع ! ***',
                                                  '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
                                                  '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
                                                  '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
                                                  '*** هيا اذاَ ***',
                                                  '*** اود ان اسئلك سؤال ونحن في الطريق ***',
                                                  '*** هل تراني فتاة لطيفة ام مخيفة ***',
                                                  '*** اشكرك !  ***',
                                                  '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
                                                  '*** هل انت جاهز ؟ ***',
                                                  '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
                                                  '*** هل تود ان تراهم الان ***',
                                               '*** انا لست الحوت الازرق كما يدعون ***',
                                                  '*** انا لست كاذبة صدقني***',
                                                  '*** لماذا ارى في عينيك الخوف ؟ ***',
                                                  '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
                                                  '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
                                                  '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
                                                  '*** لماذا لم تدخل الغرفة ؟ ***',
                                                  '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
                                                  '*** لن تخرج حتى اعود لك بعد قليل ***',
                                                  '*** المفتاح معك ! اكتب .مريم  ***',
                                                  '*** مفتاح احمر , هل حصلت عليه ؟ ***',
                                                  '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
                                                  '*** مفتاح اسود . هل حصلت عليه ؟ ***',
                                                  '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
                                                  '*** لقد عادت من جديد الى المنزل ***',
                                                  '*** لا تصدر اي صوت ! ***',
                                                  '*** مريم : لقد عدت ***',
                                                  '*** مريم : يا ايها المخادع اين انت ***',
                                                  '*** مريم : اعلم انك هنا في المنزل ***',
                                                  '*** مريم : ماذا تريد ان تسمع ***',
                                                  '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
                                                  '*** احد ما خرج من المنزل ***',
                                                  '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
                                               ]
                                                client.on('message', message => {
                                                if (message.content.startsWith('p*مريم')) {
                    if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                                 var mariam= new Discord.RichEmbed()
                                                 .setTitle("لعبة مريم ..")
                                                 .setColor('RANDOM')
                                                 .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
                                                 .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
                                                  message.channel.sendEmbed(mariam);
                                                  message.react("??")
                                                 }
                                               });
                            
                            
                            
                                               
                            
                                               client.on('message', message => {
                                               if (!points[message.author.id]) points[message.author.id] = {
                                                   points: 0,
                                                 };
                                               if (message.content.startsWith(prefix + 'عواصم')) {
                   if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                                   if(!message.channel.guild) return
                                               
                                               const type = require('./3wasm.json');
                                               const item = type[Math.floor(Math.random() * type.length)];
                                               const filter = response => {
                                                   return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                                               };
                                               message.channel.send('**لديك 15 ثانية لتجيب**').then(msg => {
                                               
                                                           
                                               msg.channel.send(`${item.type}`).then(() => {
                                                       message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                                                       .then((collected) => {
                                                       message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
                                               لمعرفة نقطاك الرجاء كتابة p*نقاطي**`);
                                                       console.log(`[Typing] ${collected.first().author} typed the word.`);
                                                           let userData = points[message.author.id];
                                                           userData.points++;
                                                         })
                                                         .catch(collected => {
                                                           message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                                                           console.log('[Typing] Error: No one type the word.');
                                                         })
                                                       })
                                                   })
                                               }
                                               });
                                               client.on('message', message => {
                                               if (message.content.startsWith(prefix + 'نقاطي')) {
                   if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                                   if(!message.channel.guild) return
                                                   let userData = points[message.author.id];
                                                   let embed = new Discord.RichEmbed()
                                                   .setAuthor(`${message.author.tag}`, message.author.avatarURL)
                                                   .setColor('#000000')
                                                   .setDescription(`نقاطك: \`${userData.points}\``)
                                                   message.channel.sendEmbed(embed)
                                                 }
                                                 fs.writeFile("./3wasmPTS.json", JSON.stringify(points), (err) => {
                                                   if (err) console.error(err)
                                                 })
                                               });
                                               
                                             
                            
                            
                            
                            
                            let points = {}
                            
                            client.on('message', message => {
                            if (!points[message.author.id]) points[message.author.id] = {
                                points: 0,
                              };
                            if (message.content.startsWith(prefix + 'فكك')) {
if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                            
                            const type = require('./fkk/fkk.json');
                            const item = type[Math.floor(Math.random() * type.length)];
                            const filter = response => {
                                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                            };
                            message.channel.send('**لديك 15 ثانيه لتفكيك الكلمه**').then(msg => {
                            
                                        
                            msg.channel.send(`${item.type}`).then(() => {
                                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                                    .then((collected) => {
                                    message.channel.send(`${collected.first().author} ✅ **مبروك لقد كسبت نقطه
                            لمعرفة نقطاك الرجاء كتابة p*نقاطي**`);
                                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                                        let userData = points[message.author.id];
                                        userData.points++;
                                      })
                                      .catch(collected => {
                                        message.channel.send(`:x: **خطأ حاول مرة اخرى**`);
                                        
                                      })
                                    })
                                })
                            }
                            });
                            client.on('message', message => {
                            if (message.content.startsWith(prefix + 'نقاطي')) {
if(!premium.includes(message.author.id)) return message.channel.send(`**للبرميوم فقط**`).then(m => m.delete(5000));
                                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                                let userData = points[message.author.id];
                                let embed = new Discord.RichEmbed()
                                .setAuthor(`${message.author.tag}`, message.author.avatarURL)
                                .setColor('#000000')
                                .setDescription(`نقاطك: \`${userData.points}\``)
                                message.channel.sendEmbed(embed)
                              }
                            
                              fs.writeFile("./fkk/fkkPTS.json", JSON.stringify(points), (err) => {
                                if (err) console.error(err)
                              })
                            });
   
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **دخل السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
// لوق خروج اللاعبين
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **خرج من السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});

// لوق الرسائل المنحذفه
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});

// لوق تعديل الرسائل
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

})
                         
                            
                            

                            
client.login(process.env.BOT_TOKEN);
