import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FicheModel} from '../../models/fiche.model';
import {UserService} from '../../services/user.service';
import {TagService} from '../../services/tag.service';
import {SectionService} from '../../services/section.service';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {

  form: FormGroup;
  sections;
  currentSection;
  tags;
  users;

  libelle: string;
  dateButoire: string;
  time: number;
  lieu: string;
  section: any;
  user: any;
  note: string;
  url: string;
  tag: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddFicheComponent>,
    @Inject(MAT_DIALOG_DATA) ficheModel: FicheModel,
    private userService: UserService,
    private tagService: TagService,
    private sectionService: SectionService) {

    this.getTags();
    this.getSections();
    this.getUsers();

    this.form = fb.group({
      Libelle: [this.libelle, Validators.required],
      Datebutoire: [this.dateButoire],
      Time: [this.time],
      Lieu: [this.lieu],
      Section: [this.section, Validators.required],
      user: [this.user, Validators.required],
      note: [this.note],
      Url: [this.url],
      tag: [this.tag],
    });

  }

  ngOnInit = () => {

  }


  save = () => {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close = () => {
    this.dialogRef.close();
  }

  getSections = (): void => {
    this.sectionService.getSections()
      .subscribe(value => {
        this.sections = value;
      }, error => {
        console.log(error);
      });
  }

  getTags = () => {
    this.tagService.getTags()
      .subscribe(value => {
        this.tags = value;
      }, error => {
        console.log(error);
      });
  }

  getUsers = (): void => {
    this.userService.getUsers()
      .subscribe(value => {
        this.users = value;
      }, error => {
        console.log(error);
      });
  }
}
