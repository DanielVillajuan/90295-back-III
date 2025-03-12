process.on('message', (data) => {
    let acum = 0;
    for(let i=0; i<5e10; i++){
        acum+=i;
    }
    process.send(acum)
})
