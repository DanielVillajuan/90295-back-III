import express from 'express';
import compression from 'express-compression'
const app = express();

app.use(compression({
    brotli: {enabled: true, zlib:{}}
}))

app.get('/pesado', (req, res) => {
    let stringlong = `Hola coders, esto es un string demasiado largo`;

    for(let i=0; i<10e3; i++){
        stringlong+= `Hola coders, esto es un string demasiado largo`
    }
    res.send(stringlong)
})

app.listen(8080, ()=> {
    console.log('Server ON')
})
