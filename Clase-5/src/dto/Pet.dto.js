export default class PetDTO {
    static getPetInputFrom = (pet) =>{ // este metodo ademas de ser un dto, tiene fallbacks
        return {
            name:pet.name||'',
            specie:pet.specie||'',
            image: pet.image||'',
            birthDate:pet.birthDate||'12-30-2000',
            adopted:false
        }
    }
}


