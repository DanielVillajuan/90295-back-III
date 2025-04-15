import { createHash } from "../src/utils.js"
import assert from 'node:assert'

describe('createHash', () => {

    it('deberia de devolver una contraseña hasheada o que no sea la misma pasada por paremtros', async () => {
        const password = 'asd1234'
        const resultado = await createHash(password)
        assert.notEqual(resultado, password) 
    })

})
