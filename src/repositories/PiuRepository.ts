import Piu from "../models/Piu";

interface CreatePiuDTO {
  id_user: string;
  text: string;
  creationDatePiu: Date;
  atualizationDatePiu: Date;
}

class PiuRepository {
  private pius: Piu[];

  constructor() {
    this.pius = [];
  }

  public allPius(): Piu[] {
    return this.pius;
  }

  public piuById(idPiu: string): Piu | null {
    const findPiuById = this.pius.find(user => user.idPiu === idPiu);

    return findPiuById || null;
}
  public create({
    id_user,
    text,
  }: CreatePiuDTO): Piu {
    const piu = new Piu({
      id_user,
      text,
      creationDatePiu: new Date(),
      atualizationDatePiu: new Date()
    });

    this.pius.push(piu);

    return piu;
  }

  public atualizePiu(idPiu: string, text: string) {
    const index = this.pius.findIndex((Object) => Object.idPiu === idPiu);

    this.pius[index].text = text;
  }


  public deleteUser(idPiu: string) {
    const index = this.pius.findIndex((Object) => Object.idPiu === idPiu);

    this.pius.splice(index, 1);
  }

}

export default PiuRepository;
