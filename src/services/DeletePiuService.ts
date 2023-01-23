import PiuRepository from "../repositories/PiuRepository";

interface RequestPiu {
    idPiu:string
}

class DeletePiuService {
    private piuRepository: PiuRepository;

    constructor(piuRepository: PiuRepository) {
        this.piuRepository = piuRepository;
    }

    public execute({ idPiu } : RequestPiu) {
        const validateId = this.piuRepository.piuById(idPiu);

        if (validateId === null) {
            throw Error('This piu ID is invalid');
        }    

        this.piuRepository.deleteUser(idPiu);
    }
} 

export default DeletePiuService;