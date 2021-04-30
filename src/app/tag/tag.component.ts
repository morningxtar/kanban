import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagService} from '../services/tag.service';
import {TagModel} from '../models/tag.model';
import {SectionModel} from '../models/section.model';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import {AddTagComponent} from './add-tag/add-tag.component';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  constructor(private tagService: TagService, private router: Router,
              private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerForm: FormGroup;
  submitted = false;
  tags;
  libelle: string;
  name: string;

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EditTagComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed ' + result);
  //     this.animal = result;
  //   });
  // }

  course = {
    description: '',
    longDescription: '',
    category: '',
  };

  ngOnInit(): void {
    this.getTags();

    this.registerForm = this.formBuilder.group({
      libelle: ['', Validators.required],
    });
  }

  onReset = () => {
    this.submitted = false;
    this.registerForm.reset();
  };

  getTags = () => {
    this.tagService.getTags()
      .subscribe(value => {
        console.log(value);
        this.tags = value;
      }, error => {
        console.log(error);
      });
  };

  onAddTag = (data: TagModel) => {
    console.log(data);
    this.tagService.saveTag(data)
      .subscribe(value => {
          alert('tag ajouté avec succès');
          this.router.navigateByUrl('/tags').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  };

  onUpdateTag = (data: TagModel) => {
    console.log(data);
    this.tagService.updateTag(data)
      .subscribe(value => {
          alert('tag ajouté avec succès');
          this.router.navigateByUrl('/tags').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }
  onDeleteTag = (data: TagModel) => {
    console.log(data);
    this.tagService.deleteTag(data.id)
      .subscribe(value => {
          alert('tag supprimé avec succès');
          this.router.navigateByUrl('/tags').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  };

  onAdd = (data: TagModel) => {
    this.onAddTag(data);
    this.getTags();
  };

  onEdit = (data: TagModel) => {
    this.onUpdateTag(data);
  };

  onDelete = (data: TagModel) => {
    this.onDeleteTag(data);
    this.getTags();
  };

  openEditDialog(tag: TagModel) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      tag
    };

    const dialogRef = this.dialog.open(EditTagComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);
        tag.libelle = val.libelle;
        this.onEdit(tag);
      }
    );
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(AddTagComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);

        this.onAddTag(val);
      }
    );
  }

}
