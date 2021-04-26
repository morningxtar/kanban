import {FicheModel} from './fiche.model';

export class TagModel {
  private id: any;
  private libelle: string;
  private fiche: Array<FicheModel>;


  get getId(): any {
    return this.id;
  }

  set setId(value: any) {
    this.id = value;
  }

  get getLibelle(): string {
    return this.libelle;
  }

  set setLibelle(value: string) {
    this.libelle = value;
  }

  get getFiche(): Array<FicheModel> {
    return this.fiche;
  }

  set setFiche(value: Array<FicheModel>) {
    this.fiche = value;
  }
}
