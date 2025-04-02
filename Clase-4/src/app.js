import cluster from 'node:cluster'
import { cpus } from 'node:os'
import express from 'express'

const amountCPU = cpus().length

if(cluster.isPrimary){
    console.log('Proceso principal')
    for(let i=0; i < amountCPU; i++){
        cluster.fork()
    }
}else {
    console.log('No es el proceso principal sino es un trabajdor con id:', process.pid)
    const app = express()

    app.get('/operacionsimple', (req, res) => {
        let sum = 0;
        for (let index = 0; index < 1000000; index++) {
            sum+=index        
        }
        res.json({ sum })
    })
    
    app.get('/operacioncompleja', (req, res) => {
        let sum = 0;
        for (let index = 0; index < 5e8; index++) {
            sum+=index        
        }
        res.json({ sum })
    })

    app.listen(8080, () => {
        console.log('Server en 8080')
    })
}
