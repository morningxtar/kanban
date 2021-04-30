import {FicheModel} from './fiche.model';

export interface SectionModel {
  id: any;
  nomsection: string;
  fiche: Array<FicheModel>;
}
