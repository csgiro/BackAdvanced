const {v4: uuidv4} = require('uuid');

class Piu{
    idPiu: string;

    id_user: string;

    text: string;

    creationDatePiu: Date;

    atualizationDatePiu: Date;

    constructor({ id_user, text, creationDatePiu, atualizationDatePiu }: Omit<Piu,'idPiu'>) {
                    this.idPiu = uuidv4();
                    this.id_user = id_user;
                    this.text = text;
                    this.creationDatePiu = creationDatePiu;
                    this.atualizationDatePiu = atualizationDatePiu;
                }
}

export default Piu;