import UserRepository from "../repositories/UserRepository";

interface RequestUser {
    id:string
}

class DeleteUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public execute({ id } : RequestUser) {
        const validateId = this.userRepository.userById(id);

        if (validateId === null) {
            throw Error('This user ID is invalid');
        }    

        this.userRepository.deleteUser(id);
    }
}    

export default DeleteUserService;