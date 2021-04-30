import {FicheModel} from './fiche.model';

export interface UserModel {
  id: any;
  nom: string;
  profession: string;
  email: string;
  fiche: Array<FicheModel>;

}
