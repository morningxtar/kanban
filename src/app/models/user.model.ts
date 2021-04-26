import {FicheModel} from './fiche.model';

export class UserModel {
  private id: any;
  private nom: string;
  private profession: string;
  private email: string;
  private fiche: Array<FicheModel>;


  get getId(): any {
    return this.id;
  }

  set setId(value: any) {
    this.id = value;
  }

   get getNom(): string {
    return this.nom;
  }

  set setNom(value: string) {
    this.nom = value;
  }

  get getProfession(): string {
    return this.profession;
  }

  set setProfession(value: string) {
    this.profession = value;
  }

  get getEmail(): string {
    return this.email;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  get getFiche(): Array<any> {
    return this.fiche;
  }

  set setFiche(value: Array<FicheModel>) {
    this.fiche = value;
  }
}
