import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  nom: string;
  profession: string;
  email: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddUserComponent>,
              @Inject(MAT_DIALOG_DATA)userModel: UserModel ) {
    this.form = fb.group({
      Nom: [this.nom, Validators.required],
      Profession: [this.profession],
      Email: [this.email],
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
