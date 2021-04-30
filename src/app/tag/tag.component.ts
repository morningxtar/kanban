import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TagService} from '../services/tag.service';
import {TagModel} from '../models/tag.model';
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


  tags;

  ngOnInit(): void {
    this.getTags();
  }

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
          this.router.navigateByUrl('/tags');
        },
        error => {
          console.log(error);
        });
  };

  onUpdateTag = (data: TagModel) => {
    console.log(data);
    this.tagService.updateTag(data)
      .subscribe(value => {
          this.router.navigateByUrl('/tags');
        },
        error => {
          console.log(error);
        });
  }
  onDeleteTag = (data: TagModel) => {
    console.log(data);
    this.tagService.deleteTag(data.id)
      .subscribe(value => {
          this.router.navigateByUrl('/tags');
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

  openEditDialog = (tag: TagModel) => {
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
        if (val !== undefined) {
          tag.libelle = val.libelle;
          this.onEdit(tag);
        }
      }
    );
  }

  openAddDialog = () => {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(AddTagComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);

        if (val !== undefined) {
          this.onAddTag(val);
        }
      }
    );
  }

}
