import { request, response, Router } from 'express';
import PiuRepository from '../repositories/PiuRepository';
import CreatePiuService from '../services/CreatePiuService';
import DeletePiuService from '../services/DeletePiuService';
import AtualizePiuService from '../services/AtualizePiuService';
import UserRepository from '../repositories/UserRepository';

const piuRouter = Router();
const piuRepository = new PiuRepository;
const userRepository = new UserRepository;

piuRouter.post('/pius', (request, response) => {
    try {
        const { id_user, text, creationDatePiu, atualizationDatePiu } = request.body;

    const createPiu = new CreatePiuService(piuRepository, userRepository);

    const piu = createPiu.execute({ id_user, text, creationDatePiu, atualizationDatePiu });

    return response.json(piu);
    } catch (err) {
      return response.status(400).json({ error: (err as Error).message })
    }
});

piuRouter.get('/pius', (_request, response) => {
    const getPiu = piuRepository.allPius();

    return response.json(getPiu);
});

piuRouter.put('/pius', (request, response) => {
    try {
        const { idPiu, id_user, text} = request.body;

    const atualizePiu =  new AtualizePiuService(piuRepository, userRepository);

    const atualizeOfPiu = atualizePiu.execute({ idPiu, id_user, text });

    return response.json(atualizeOfPiu);

    } catch (err) {
        return response.status(400).json({ error: (err as Error).message })
    }
});

piuRouter.delete('/pius', (request, response) => {
    try {
        const { idPiu } = request.body;
    
    const deletePiu = new DeletePiuService(piuRepository);

    const deleteOfPiu = deletePiu.execute({ idPiu });

    return response.json(deleteOfPiu);
    } catch (err) {
        return response.status(400).json({ error: (err as Error).message })
    }
});

export default piuRouter;