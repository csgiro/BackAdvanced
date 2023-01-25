const {v4: uuidv4} = require('uuid');

class User{
    id: string;

    name: string;

    birthDate: string;

    cpf: string;

    phone: string;

    creationDate: Date;

    atualizationDate: Date;

    constructor({ name, birthDate, cpf, phone, 
                creationDate, atualizationDate } : Omit<User, 'id'>) {
                    this.id = uuidv4();
                    this.name = name;
                    this.birthDate = birthDate;
                    this.cpf = cpf;
                    this.phone = phone;
                    this.creationDate = creationDate;
                    this.atualizationDate = atualizationDate;
                }
}

export default User;