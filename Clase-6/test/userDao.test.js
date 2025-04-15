import mongoose from "mongoose"
import Users from "../src/dao/Users.dao.js"
import assert from 'node:assert'

mongoose.connect(`mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback`,() => {
    console.log('Base de datos conectada')
})

describe('User Dao', () => {
    before(function(){
        this.userDao = new Users()
    })

    it('Deberia de retornar un array de usuarios', async function(){
        const result = await this.userDao.get()
        assert.equal(Array.isArray(result), true) 
    })

    it('Deberia de retornar un usuario por mail', async function(){
        const email = 'Brenda30@hotmail.com'
        const result = await this.userDao.getBy({ email })

        assert.equal(result.first_name,'Lavonne') 
        assert.equal(result.last_name,'Armstrong') 
    })

})
