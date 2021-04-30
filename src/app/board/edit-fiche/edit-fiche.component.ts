import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TagModel} from '../../models/tag.model';
import {FicheModel} from '../../models/fiche.model';
import {UserService} from '../../services/user.service';
import {TagService} from '../../services/tag.service';
import {SectionService} from '../../services/section.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-fiche',
  templateUrl: './edit-fiche.component.html',
  styleUrls: ['./edit-fiche.component.css']
})
export class EditFicheComponent implements OnInit {

  form: FormGroup;
  sections;
  currentSection;
  tags;
  users;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditFicheComponent>,
    @Inject(MAT_DIALOG_DATA) ficheModel: FicheModel,
    private userService: UserService,
    private tagService: TagService,
    private sectionService: SectionService) {

    this.getTags();
    this.getSections();
    this.getUsers();
    this.currentSection = ficheModel['fiche'].Section;
    this.form = fb.group({
      libelle: [ficheModel['fiche'].Libelle, Validators.required],
      dateButoire: [ficheModel['fiche'].Datebutoire, Validators.required],
      time: [ficheModel['fiche'].Time, Validators.required],
      lieu: [ficheModel['fiche'].Lieu, Validators.required],
      section: [ficheModel['fiche'].Section, Validators.required],
      user: [ficheModel['fiche'].user, Validators.required],
      note: [ficheModel['fiche'].note, Validators.required],
      url: [ficheModel['fiche'].Url, Validators.required],
      tags: [ficheModel['fiche'].tag, Validators.required],
    });

  }

  ngOnInit() {

  }


  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
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
