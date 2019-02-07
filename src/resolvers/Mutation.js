require('es6-promise').polyfill();
require('isomorphic-fetch');

const { validateEmail } = require('../utils')

const Mutations = {

    async sendMessage(parent, args, context, info){

        const data = { ...args }

        // Check fullname
        if(data.fullname.length < 4) {
          throw new Error(`Fullname so small? 🤔`)
        }

        // Validate email
        if(!validateEmail(data.email)) {
          throw new Error(`Please enter your CORRECT EMAIL ADDRESS! 😡`)
        }

        // Validate subject
        if(data.subject.length < 6) {
          throw new Error(`I hate lazy ppl writing less in subject field!`)
        }

        // Validate message
        if(data.message.length < 9) {
          throw new Error(`Can you not express yourself longer?`)
        }

        // Validate Phone number
        const isPhoneValid = await fetch(`http://apilayer.net/api/validate?access_key=${process.env.APILAYER_KEY}&number=${data.phone}`)
        .then(res => (res.json()))
        .then(json => (json.valid))

        if(data.phone != null && !isPhoneValid){
          throw new Error(`Please write a valid phone number.`)
        }

        // JUST DO IT!!!
        const contact = await context.db.mutation.createContact({data}, info)
        return contact

    }

};

module.exports = Mutations;