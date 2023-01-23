import Piu from "../models/Piu";
import PiuRepository from "../repositories/PiuRepository";

interface RequestPiu {
  id_user: string;
  text: string;
  creationDatePiu: Date;
  atualizationDatePiu: Date;
}

class CreatePiuService {
  private piuRepository: PiuRepository;

  constructor(piuRepository: PiuRepository) {
    this.piuRepository = piuRepository;
  }

  public execute({
    id_user,
    text
  }: RequestPiu): Piu {
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
      const newPiu = this.piuRepository.create({
        id_user,
        text,
        creationDatePiu: new Date(),
        atualizationDatePiu: new Date()
    });
      
      return newPiu;
    }
  }
}

export default CreatePiuService;
