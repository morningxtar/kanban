import {FicheModel} from './fiche.model';

export class SectionModel {
  private id: any;
  private nomsection: string;
  private fiche: Array<FicheModel>;


  get getId(): any {
    return this.id;
  }

  set setId(value: any) {
    this.id = value;
  }

  get getNomsection(): string {
    return this.nomsection;
  }

  set setNomsection(value: string) {
    this.nomsection = value;
  }

  get getFiche(): Array<FicheModel> {
    return this.fiche;
  }

  set setFiche(value: Array<FicheModel>) {
    this.fiche = value;
  }
}
