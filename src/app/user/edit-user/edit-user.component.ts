import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  nom: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) userModel: UserModel) {
    this.form = fb.group({
      Nom: [userModel['user'].Nom, Validators.required],
      Profession: [userModel['user'].Profession],
      Email: [userModel['user'].Email],
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
}
