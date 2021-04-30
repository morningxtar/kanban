import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SectionService} from '../services/section.service';
import {SectionModel} from '../models/section.model';
import {FormBuilder} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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

  sections;
  section: string;


  course = {
    description: '',
    longDescription: '',
    category: '',
  };

  ngOnInit(): void {
    this.getSections();
  }

  getSections = () => {
    this.sectionService.getSections()
      .subscribe(value => {
        this.sections = value;
      }, error => {
        console.log(error);
      });
  };

  onAddSection = (data: SectionModel) => {
    this.sectionService.saveSection(data)
      .subscribe(value => {
          this.router.navigateByUrl('/sections');
        },
        error => {
          console.log(error);
        });
  }

  onUpdateSection = (data: SectionModel) => {
    this.sectionService.updateSection(data)
      .subscribe(value => {
          this.router.navigateByUrl('/sections');
        },
        error => {
          console.log(error);
        });
  };

  onDeleteSection = (data: SectionModel) => {
    this.sectionService.deleteSection(data.id)
      .subscribe(value => {
          this.router.navigateByUrl('/sections');
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

  openEditDialog = (section: SectionModel) => {
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

  openAddDialog = () => {
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
