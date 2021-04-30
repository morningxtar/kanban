import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagModel} from '../models/tag.model';
import {SectionService} from '../services/section.service';
import {SectionModel} from '../models/section.model';
import {Observable, Subscription} from 'rxjs';
import {TagService} from '../services/tag.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EditTagComponent} from '../tag/edit-tag/edit-tag.component';
import {AddTagComponent} from '../tag/add-tag/add-tag.component';
import {AddSectionComponent} from './add-section/add-section.component';
import {EditSectionComponent} from './edit-section/edit-section.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService: SectionService, private router: Router,
              private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerForm: FormGroup;
  submitted = false;
  sections;
  section: string;


  course = {
    description: '',
    longDescription: '',
    category: '',
  };

  ngOnInit(): void {
    this.getSections();

    this.registerForm = this.formBuilder.group({
      section: ['', Validators.required],
    });


    // const section = new SectionModel();
    // section.setNomsection = 're';
    // this.onAddSection(section);
    // console.log(section);
  }

  onReset = () => {
    this.submitted = false;
    this.registerForm.reset();
  };

  getSections = () => {
    this.sectionService.getSections()
      .subscribe(value => {
        console.log(value);
        this.sections = value;
      }, error => {
        console.log(error);
      });
  };


 /* getSections = (): Subscription => {
    return this.sectionService.getSections()
      .subscribe(value => {
        console.log(value);
        return value;
      }, error => {
        console.log(error);
      });
  }*/


  onAddSection = (data: SectionModel) => {
    console.log(data);
    this.sectionService.saveSection(data)
      .subscribe(value => {
          alert('Utilisateur ajouté avec succès');
          this.router.navigateByUrl('/sections').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

  onUpdateSection = (data: SectionModel) => {
    console.log(data);
    this.sectionService.updateSection(data)
      .subscribe(value => {
          alert('section ajouté avec succès');
          this.router.navigateByUrl('/sections').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  };

  onDeleteSection = (data: SectionModel) => {
    console.log(data);
    this.sectionService.deleteSection(data.id)
      .subscribe(value => {
          alert('section supprimé avec succès');
          this.router.navigateByUrl('/sections').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  };

  onAdd = (data: SectionModel) => {
    this.onAddSection(data);
    this.getSections();
  };

  onEdit = (data: SectionModel) => {
    this.onUpdateSection(data);
  };

  onDelete = (data: SectionModel) => {
    this.onDeleteSection(data);
    this.getSections();
  };

  openEditDialog(section: SectionModel) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      section
    };

    const dialogRef = this.dialog.open(EditSectionComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);
        section.nomsection = val.nomsection;
        this.onEdit(section);
      }
    );
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(AddSectionComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);

        this.onAddSection(val);
      }
    );
  }

}
