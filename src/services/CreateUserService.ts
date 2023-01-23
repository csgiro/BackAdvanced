import User from "../models/User";
import UserRepository from "../repositories/UserRepository";

interface RequestUser {
    name: string;
    birthDate: string;
    cpf: string;
    phone: string;
    creationDate: string;
    atualizationDate: string;
}

class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public execute({ name, birthDate, cpf, phone} : RequestUser): User {
        const findCpfUser = this.userRepository.findByCpf(cpf);

        if (findCpfUser) {
            throw new Error('This CPF already exists');
        }

        if (!name || !birthDate || !cpf || !phone) {
            throw new Error('Complete all the informations');
        }    

        const newUser = this.userRepository.create({ name, birthDate, cpf, 
            phone, creationDate: new Date(), atualizationDate: new Date()});

        return newUser;    
    }
}

export default CreateUserService;


