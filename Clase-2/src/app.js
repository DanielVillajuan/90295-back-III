import express from 'express';
import UserRouter from './routers/user.router.js'
const app = express()

app.use('/api/users', UserRouter)

app.listen(8080, ()=> {
    console.log('Server ON')
})
