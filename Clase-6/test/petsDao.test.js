import mongoose from "mongoose"
import Pets from "../src/dao/Pets.dao.js"
import { expect } from "chai"

mongoose.connect(`mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback`,() => {
    console.log('Base de datos conectada')
})

describe('Pets Dao', () => {
    before(function(){
        this.petsDao = new Pets()
    })

    it('Deberia de retornar un array de mascotas', async function(){
        const result = await this.petsDao.get()
        const expected = Array.isArray(result)

        expect(expected).to.be.true // afirmacion
    })

    it('Deberia de retornar una mascota por name', async function(){
        
        const name = 'firulai'
        const result = await this.petsDao.getBy({ name })

        expect(result.name).to.be.equal('firulai') 
        // expect(result.owner).to.be.equal(false) 
        // jest
    })

})

describe('User Dao', () => {
    before(function(){
        this.petsDao = new Pets()
    })

    it('Deberia de retornar un array de mascotas', async function(){
        const result = await this.petsDao.get()
        const expected = Array.isArray(result)

        expect(expected).to.be.true // afirmacion
    })

    it('Deberia de retornar una mascota por name', async function(){
        
        const name = 'firulai'
        const result = await this.petsDao.getBy({ name })

        expect(result.name).to.be.equal('firulai') 
        // expect(result.owner).to.be.equal(false) 
        // jest
    })

})
