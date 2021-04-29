import {FicheModel} from './fiche.model';

export interface TagModel {
  id: any;
  libelle: string;
  fiche: Array<FicheModel>;
}
