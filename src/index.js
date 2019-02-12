require('dotenv').config({ path: '.env' })

const createServer = require('./createServer')
const server = createServer()

// // Error handler
// const errorHandler = (err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err)
//   }
//   const { status } = err
//   res.status(status).json(err)
// }
// app.use(errorHandler)

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.PROD_FRONTEND_URL
        },
        playground: '/',
        endpoint: '/',
        https: undefined
    }, 
    details => { console.log(`Server is now running on port http://localhost:${details.port}`) }
)