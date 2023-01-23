import PiuRepository from "../repositories/PiuRepository";

interface RequestPiu {
  idPiu: string;
  id_user: string;
  text: string;
}

class AtualizePiuService {
    private piuRepository: PiuRepository;

    constructor(piuRepository: PiuRepository) {
      this.piuRepository = piuRepository;
    }
  
    public execute({ idPiu, id_user, text} : RequestPiu) {


    const findId_user = this.piuRepository.findBy_id_user(id_user);

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

