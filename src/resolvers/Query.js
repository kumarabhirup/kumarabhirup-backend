const { forwardTo } = require('prisma-binding')

const Query = {

    async contacts(parent, args, context, info) {
        throw new Error(`I cannot reveal the messages I received. Sorry.`)
    }
    
};

module.exports = Query;
