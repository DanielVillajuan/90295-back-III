const login = async (user, pass) => {
    // recibo datos (usuario, contraseña)
    // los valido en mi persistencia
    // si esta todo ok, seguis largo (entras a la app)
    // si no esta todo ok, deniego vistas/rutas
    if(typeof user !== 'string' || typeof pass !=='string'){
        console.error('Alguno de los argumentos es undefined')
        return null
    }
 
    const user = await UserModel.find({name:user, password: pass})
    return user ? user : null
}

const filterToCategory = (products,categoria) => {
    return products.filter()
}


describe('funcion filterToCategory', () => {
    it('Deberia de retornar productos filtrados en base a una categoria',() => {
        const usersWithProductsMock = generateUser()
        filterToCategory(usersWithProductsMock,'almacen')
    })
})



describe('Funcion logins', () => {
    it('Devolver el usuario correctamente ya que existe', () => {
        const usuario = login('daniel','coder123')
        expect(usuario.name).toBe('Daniel Leonardo')
    })

    it('Devolver null ya que no existe usuario', () => {
        const usuario = login('danielito','juju123')
        expect(usuario).toBe(null)
    })


    it('Devolver null con un console error si alguno de los argumentos no estan definidos', () => {
        const usuario = login(undefined,'juju123')
        expect(usuario).toBe(null)
    })

    it('Devolver null en caos de que ningun argumenta contenga un valor', () => {
        const usuario = login()
        expect(usuario).toBe(null)
    })

    it('Devolver null en caos de que alguno de los argmunetos no sea string', () => {
        const usuario = login()
        expect(usuario).toBe(null)
    })
})
