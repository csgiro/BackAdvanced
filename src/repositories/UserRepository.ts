import User from '../models/User';

interface CreateUserDTO {
    name: string;
    birthDate: string;
    cpf: string;
    phone: string;
    creationDate: Date;
    atualizationDate: Date;
}

class UserRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    public allUsers(): User[] {
        return this.users;
    }

    public userById(id: string): User | null {
        const findUserById = this.users.find(user => user.id === id);

        return findUserById || null;
    }

    public findByCpf(cpf: string): User | null {
        const findCpf = this.users.find(user => user.cpf === cpf);

        return findCpf || null;
    }

    public create({ name, birthDate, cpf, phone} : CreateUserDTO) : User {
            const user = new User({name, birthDate, cpf, phone, creationDate: new Date(), atualizationDate: new Date()});

            this.users.push(user);  
            
            return user;
    }

    public atualizeUser(id: string, name: string, birthDate: string, cpf: string, phone: string) {
        const index = this.users.findIndex((Object) => Object.id === id);
    
        this.users[index].name = name;
        this.users[index].birthDate = birthDate;
        this.users[index].cpf = cpf;
        this.users[index].phone = phone;
    }
    
    public deleteUser(id: string) {
        const index = this.users.findIndex(Object => Object.id === id);

        this.users.splice(index,1);
    }

}

export default UserRepository;