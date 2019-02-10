require('dotenv').config({ path: '.env' })

const createServer = require('./createServer')
const server = createServer()

// USE MIDDLEWARES HERE

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.NODE_ENV = 'development' ? process.env.FRONTEND_URL : process.env.PROD_FRONTEND_URL
        },
    }, 
    details => { console.log(`Server is now running on port http://localhost:${details.port}`) }
)