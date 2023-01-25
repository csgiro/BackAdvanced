import PiuRepository from "../repositories/PiuRepository";
import UserRepository from "../repositories/UserRepository";

interface RequestPiu {
  idPiu: string;
  id_user: string;
  text: string;
}

class AtualizePiuService {
    private piuRepository: PiuRepository;
    private userRepository: UserRepository;

    constructor(piuRepository: PiuRepository, userRepository: UserRepository) {
      this.piuRepository = piuRepository;
      this.userRepository = userRepository;
    }
  
    public execute({ idPiu, id_user, text} : RequestPiu) {


    const findId_user = this.userRepository.userById(id_user);

    if (!findId_user) {
      throw new Error("The user ID is invalid");
    }

    if (!text.length) {
      throw new Error("Text is empty");
    }

    if (text.length > 140) {
      throw new Error("Text is too large");
    } 
    
    else {
        this.piuRepository.atualizePiu(idPiu, text)
      };

    }
}  

export default AtualizePiuService;

