const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`pro wolf system`,"http://twitch.tv/pro wolf system")
client.user.setStatus("dnd")
});

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`pro wolf system`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
 
 
 
 
 
 
client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "+";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });
 
client.on('message', function(message) {
    if (message.content == "+clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }
 
});
   
  client.on('message', message => {
    if (message.content.startsWith("+link")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 25,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")
 
message.author.send(`**مدة الرابط : يـوم
دد استخدامات الرابط : 25**`)
 
    }
});
 
 
client.on('message', message => {
 
    if (message.content === "+mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "+umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }
 
 
 
});
 
client.on('message', message => {
const prefix = "+";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
 
  message.guild.member(user).kick(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492086928397565952").send({embed : banembed})
}
});
 
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
 
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
 
 
  message.guild.member(user).ban(7, user);
 
message.channel.send(`**baneed from this server**`)
 
}
});
 
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer حقوق الفا كودز و
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer حقوق الفا كودز و
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer حقوق الفا كودز و
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer حقوق الفا كودز و
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer حقوق الفا كودز و
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});
 
    client.on('message', message => {
        var prefix = "+";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
     
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
     
     
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
       
       
      });
client.on('message', message => {
    var prefix = "+";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("*bc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
 
client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!!';// Alpha Codes
    var name = '';// Alpha Codes
    var age = '';// Alpha Codes
    var fromwhere = '';// Alpha Codes
    var fa2dh = '';// Alpha Codes
    var filter = m => m.author.id === message.author.id;// Alpha Codes
    var subChannel = message.guild.channels.find(c => c.name === 'support-join');// Alpha Codes
   
    if(command == prefix + 'join-support') {// Alpha Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === '✲ SUPPORT');// Alpha Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `support-join`');// Alpha Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === 'ايدي الي يقبل الطلب'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === 'ايدي الي يقبل الطلب'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك اداري بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'support-accept').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'support-accept').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Alpha Codes
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});








































client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
