const Mutations = {

    async createContact(parent, args, context, info){
        const contact = await context.db.mutation.createContact({
            data: {...args}
        }, info)
        console.log(contact)
        return contact
    }

};

module.exports = Mutations;
