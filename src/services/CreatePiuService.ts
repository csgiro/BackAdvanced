import Piu from "../models/Piu";
import PiuRepository from "../repositories/PiuRepository";
import UserRepository from "../repositories/UserRepository";

interface RequestPiu {
  id_user: string;
  text: string;
  creationDatePiu: Date;
  atualizationDatePiu: Date;
}

class CreatePiuService {
  private piuRepository: PiuRepository;
  private userRepository: UserRepository;

  constructor(piuRepository: PiuRepository, userRepository: UserRepository) {
    this.piuRepository = piuRepository;
    this.userRepository = userRepository;
  }

  public execute({
    id_user,
    text
  }: RequestPiu,): Piu {
    const findId_user = this.userRepository.userById(id_user);

    if (findId_user === null) {
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
