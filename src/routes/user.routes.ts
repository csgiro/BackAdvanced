import { request, response, Router } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import AtualizeUserService from '../services/AtualizeUserService';

const userRouter = Router();
const userRepository = new UserRepository;

userRouter.post('/', (request, response) => {
    try {
        const { name, birthDate, cpf, phone, 
            creationDate, atualizationDate } = request.body;

    const createUser = new CreateUserService(userRepository);

    const user = createUser.execute({ name, birthDate, cpf, phone, 
        creationDate, atualizationDate });

    return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message })
    }
});

userRouter.get('/', (_request, response) => {
    const getUser = userRepository.allUsers();

    return response.json(getUser);
});

userRouter.put('/', (request, response) => {
    try {
        const { id, name, birthDate, cpf, phone} = request.body;

    const atualizeUser =  new AtualizeUserService(userRepository);

    const atualizeOfUser = atualizeUser.execute({ id, name, birthDate, cpf, phone });

    return response.json(atualizeOfUser)

    } catch (err) {
        return response.status(400).json({ error: (err as Error).message })
    }
});

userRouter.delete('/', (request, response) => {
    try {
        const { id } = request.body;
    
    const deleteUser = new DeleteUserService(userRepository);

    const deleteOfUser = deleteUser.execute({ id });

    return response.json(deleteOfUser);
    } catch (err) {
        return response.status(400).json({ error: (err as Error).message })
    }
});

export default userRouter;