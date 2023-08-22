exports.run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      env,
      Func
   }) => {
      client.sendContact(m.chat, [{
         name: env.owner_name,
         number: env.owner,
         about: 'Software Engineer'
      }], m, {
         org: 'Mr Juice OFC',
         website: 'https://mrjuiceofc1.blogspot.com/?m=1',
         email: 'mrjuice017@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}