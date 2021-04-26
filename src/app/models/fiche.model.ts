import {TagModel} from './tag.model';
import {SectionModel} from './section.model';
import {UserModel} from './user.model';

export class FicheModel {
  private id: any;
  private libelle: string;
  private dateButoire: Date;
  private user: UserModel;
  private time: number;
  private lieu: string;
  private note: string;
  private url: string;
  private tags: Array<TagModel>;
  private section: SectionModel;


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

  get getDateButoire(): Date {
    return this.dateButoire;
  }

  set setDateButoire(value: Date) {
    this.dateButoire = value;
  }

  get getUser(): UserModel {
    return this.user;
  }

  set setUser(value: UserModel) {
    this.user = value;
  }

  get getTime(): number {
    return this.time;
  }

  set setTime(value: number) {
    this.time = value;
  }

  get getLieu(): string {
    return this.lieu;
  }

  set setLieu(value: string) {
    this.lieu = value;
  }

  get getNote(): string {
    return this.note;
  }

  set setNote(value: string) {
    this.note = value;
  }

  get getUrl(): string {
    return this.url;
  }

  set setUrl(value: string) {
    this.url = value;
  }

  get getFiche(): Array<TagModel> {
    return this.tags;
  }

  set setFiche(value: Array<TagModel>) {
    this.tags = value;
  }

  get getSection(): SectionModel {
    return this.section;
  }

  set setSedtion(value: SectionModel) {
    this.section = value;
  }
}
