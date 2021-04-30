import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TagModel} from '../../models/tag.model';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditTagComponent>,
    @Inject(MAT_DIALOG_DATA) tagModel: TagModel) {

    this.form = fb.group({
      libelle: [tagModel['tag'].libelle, Validators.required],
    });

  }

  ngOnInit = () => {

  };


  save = () => {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  };

  close = () => {
    this.dialogRef.close();
  };

}

