import express from 'express'
import { insertLog } from './middleware.js'

const app = express()
app.use(express.json())
app.use(insertLog)

app.get('/', (req, res) => {

    res.json({mensaje: 'Peticion cualquiera'})
})

app.post('/usuario', (req, res) => {
    const {name, pass} = req.body
    if(!name || !pass){

        // explota a la hora de crear un usuario
        req.logger.warning('Fallo a la hora de mandar cierto valores')
        return res.status(400).json({mensaje: 'No paso algun valor'})
    }

    res.json({mensaje: 'Peticion cualquiera'})
})

app.get('/operacionsimple', (req, res) => {
    let sum = 0;
    for (let index = 0; index < 1000000; index++) {
        sum+=index        
    }
    res.status(200).json({ sum })
})

app.get('/operacioncompleja', (req, res) => {
    let sum = 0;
    for (let index = 0; index < 5e8; index++) {
        sum+=index        
    }
    res.status(200).json({ sum })
})

app.listen(8080, () => {
    console.log('Server ON')
})
