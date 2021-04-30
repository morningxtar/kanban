import {TagModel} from './tag.model';
import {SectionModel} from './section.model';
import {UserModel} from './user.model';

export interface FicheModel {
  id: any;
  Libelle: string;
  Datebutoire: Date;
  user: UserModel;
  Time: number;
  Lieu: string;
  note: string;
  Url: string;
  tag: Array<TagModel>;
  Section: SectionModel;
}
