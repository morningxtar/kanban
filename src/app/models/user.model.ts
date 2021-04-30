import {FicheModel} from './fiche.model';

export class UserModel {
  id: any;
  Nom: string;
  Profession: string;
  Email: string;
  fiche: Array<FicheModel>;
}
