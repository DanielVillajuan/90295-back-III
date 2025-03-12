// import { Command } from 'commander'
// import dotenv from 'dotenv'
// const command =  new Command()

// command
//     .option('-m','Seleccionar modo de interface',false)
//     .option('--port <port>', 'puerto del server', 8080)
//     .option('--env <environment>', 'ambiente de app','dev')

// command.parse()

// const environment = command.opts().env // aca traigo los valores del cli process.argv o command

// const handleEnv = {
//     local: './.env',
//     qa: './.env.qa',
//     prod: './.env.prod',
//     staging: './.env.staging'
// }
// dotenv.config({
//     path: handleEnv[environment]
// })

// console.log(process.cwd())
// console.log(process.argv.slice(3))

// console.log(process.env.MONGO_URL)
 // le indicio que ya cierro la configuracion.


// console.log('Comandos -> ', command.opts())
// console.log('Argumentos -> ', command.args)


// process.on('exit', (code)=>{
//     console.log('Se termina el proceso')
// })

// process.on('uncaughtException', () => {
//     // variables globales/estados 
//     console.log('Problema no controlado')
// })

// console('')

import express from 'express'
import { fork } from 'child_process';

const app = express();

app.get('/', (req, res) => {
    res.send('Homeee!')
})

app.get('/operacioncompleja', (req, res) => {
    const child = fork('./operacioncompleja.js'); // ejecutarlo en otro sub process
    child.send('Iniciar proceso')
    child.on('message', resultado => {
        res.send(`El resultado del calculo complejo es: ${resultado}`)
    })
})

app.listen(8080, () => {
    console.log('server on')
})
