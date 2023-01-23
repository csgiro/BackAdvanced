import UserRepository from "../repositories/UserRepository";

interface RequestUser {
  id: string;
  name: string;
  birthDate: string;
  cpf: string;
  phone: string;
}

class AtualizeUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
      this.userRepository = userRepository;
    }
  
    public execute({ id, name, birthDate, cpf, phone} : RequestUser) {

        const findCpfUser = this.userRepository.findByCpf(cpf);

        if (findCpfUser) {
            throw new Error('This CPF already exists');
        }

        if (!name || !birthDate || !cpf || !phone) {
            throw new Error('Complete all the informations');
        }    

        this.userRepository.atualizeUser(id, name, birthDate, cpf, phone);
    }
}

export default AtualizeUserService;