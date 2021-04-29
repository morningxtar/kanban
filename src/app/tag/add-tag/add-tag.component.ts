import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TagModel} from '../../models/tag.model';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  form: FormGroup;
  libelle: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTagComponent>,
    @Inject(MAT_DIALOG_DATA) tagModel: TagModel ) {

    this.form = fb.group({
      libelle: [this.libelle, Validators.required],
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
}
