import { expect } from "chai";
import supertest from "supertest";
import { dirname } from 'node:path'
import { fileURLToPath } from "node:url";

const requester = supertest('http://localhost:8080')


describe('Test mascotas',() => {
    it('deberia de crear correctamente una mascota en /api/pets [POST]', async () => {
        const mockPet = {
            name: 'Firulai',
            specie: 'Caniche',
            birthDate: new Date("19-03-2023")
        }
       const { statusCode, ok, _body } = await requester.post('/api/pets/').send(mockPet)

       expect(statusCode).to.be.eq(200)
       expect(ok).to.be.eq(true)
       expect(_body.payload).to.have.property('_id')
    })
    it('deberia de devolver todas las mascotas que existen /api/pets [GET]', async () => {

       const { ok, _body } = await requester.get('/api/pets/')

       expect(_body.status).to.be.eq("success")
       expect(ok).to.be.eq(true)
       expect(_body.payload.length).to.be.greaterThan(0)
    })

    it('deberia de eliminar correctamente una mascota en /api/pets/:pid [DELETE]', async () => {
        const mockPet = {
            name: 'Firulai',
            specie: 'Caniche',
            birthDate: new Date("19-03-2023")
        }
       const { _body } = await requester.post('/api/pets/').send(mockPet)

       const petId = _body.payload._id

         const { ok, _body: bodyDelete } = await requester.delete(`/api/pets/${petId}`)
         expect(bodyDelete.status).to.be.eq("success")
         expect(bodyDelete.message).to.be.eq("pet deleted")
         expect(ok).to.be.eq(true)
    })

})

// describe('Login/Register', () => {
//     let cookie = {}
//     // it('Deberia de registrar un usuario correctamente', async () => {
//     //     const mockUser = {
//     //         first_name: 'Mauri',
//     //         last_name: 'Rosas',
//     //         email: 'asd@gmail.com',
//     //         password: 'coder123'
//     //     }

//     //     const {statusCode, _body} = await requester.post('/api/sessions/register').send(mockUser)

//     //     expect(statusCode).to.be.eq(200);
//     //     expect(_body.payload).to.be.ok;
//     // })

//     it('Deberia de loguear correctamente y ademas devolver una cookie por header', async () => {
//         const mockUser = {
//             email: 'asd@gmail.com',
//             password: 'coder123'
//         }
//         const response = await requester.post('/api/sessions/login').send(mockUser)
//         // console.log(response)
//         const cookieResult = response.headers['set-cookie'][0]

//         expect(cookieResult).to.be.ok

//         const { 0: nameCookie, 1: valueCookie } = cookieResult.split('=');
//         cookie = {
//             name: nameCookie, // el nombre de la cookie
//             value: valueCookie
//         }
//         expect(cookie.name).to.be.ok.and.eql('coderCookie')
//         expect(cookie.value).to.be.ok
//     })

//     it('Debe de validar la cookie, obtener el token y devolver el usuario de dicho token', async () => {
//         const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${cookie.name}=${cookie.value}`]) // cookie -> nombre = valor
//         expect(_body.payload.email).to.be.eql('asd@gmail.com')
//     })

// })


// describe('Multer/cargar imagen', () => {
//     it('Debe de crear una mascota con imagen', async () => {
//         const mockPet = {
//             name: 'Balta',
//             specie: 'Labrador',
//             birthDate: new Date("20-01-2020")
//         }
//         const __filename = fileURLToPath(import.meta.url);
//         const __dirname = dirname(__filename);  

//         console.log(__dirname)
//         const { statusCode, _body } = await requester.post('/api/pets/withimage')
//             .field('name', mockPet.name)
//             .field('specie', mockPet.specie)
//             .field('birthDate', mockPet.birthDate)
//             .attach('image', __dirname +'/img/coderDog.jpg')
//         expect(statusCode).to.eql(200);
//         expect(_body.payload).to.have.property('_id')
//         expect(_body.payload.image).to.be.ok;
//     })
// })
