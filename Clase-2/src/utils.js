import { faker } from '@faker-js/faker';

const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        descriptions: faker.commerce.productName(),
        price: faker.commerce.price(),
        stock: faker.number.int({min:50,max: 100})
    }
}

export const generateUser = () => {
    const numberRandom = faker.number.int({min: 1, max: 7})
    const products = []
    for(let i=0; i< numberRandom; i++){
        products.push(generateProduct())
    }
    return {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sex(),
        phone: faker.phone.number(),
        products,
        email: faker.internet.email() 
    }
}
