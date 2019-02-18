require('dotenv').config({ path: '.env' })

const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

// start it
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation
  },
  context: request => ({
    ...request,
    prisma,
  }),
})

server.start(
  {
    cors: {
      credentials: false,
      origin: process.NODE_ENV === 'development' ? process.env.FRONTEND_URL : process.env.PROD_FRONTEND_URL
    },
  },
  details => console.log(`Server is running on http://localhost:${details.port}`)
)
