exports.run = {
   usage: ['igstalk'],
   use: 'username',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'hosico_cat'), m)
         client.sendReact(m.chat, '🕒', m.key)
         const json = await Api.neoxr('/igstalk', {
         	username: args[0]
         })
         if (!json.status) return client.reply(m.chat, Func.texted('bold', `🇿🇼 Account not found.`), m)
         let caption = `乂  *I G - S T A L K*\n\n`
         caption += `	⌯  *Name* : ${json.data.name}\n`
         caption += `	⌯  *Username* : ${json.data.username}\n`
         caption += `	⌯  *Posts* : ${json.data.post}\n`
         caption += `	⌯  *Followers* : ${json.data.follower}\n`
         caption += `	⌯  *Followings* : ${json.data.following}\n`
         caption += `	⌯  *Bio* : ${json.data.about}\n`
         caption += `	⌯  *Private* : ${Func.switcher(json.data.private, '√', '×')}\n\n`
         caption += global.footer
         client.sendFile(m.chat, json.data.photo, 'image.png', caption, m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}