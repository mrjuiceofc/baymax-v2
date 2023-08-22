exports.run = {
   usage: ['changename'],
   use: 'text',
   category: 'owner',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      Func
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'neoxr bot'), m)
         if (text.length > 25) return client.reply(m.chat, `🇿🇼 Text is too long, maximum 25 characters.`, m)
         client.authState.creds.me.name = text
         await props.save(global.db)
         return client.reply(m.chat, `🇿🇼 Name successfully changed.`, m)
      } catch {
         return client.reply(m.chat, Func.texted('bold', `🇿🇼 Name failed to change.`), m)
      }
   },
   owner: true
}