import {Component, OnInit} from '@angular/core';
import {TagService} from '../services/tag.service';
import {Router} from '@angular/router';
import {TagModel} from '../models/tag.model';
import {UserService} from '../services/user.service';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SectionModel} from '../models/section.model';
import {UserModel} from '../models/user.model';
import {EditSectionComponent} from '../section/edit-section/edit-section.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {AddSectionComponent} from '../section/add-section/add-section.component';
import {AddUserComponent} from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,
              private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerForm: FormGroup;
  submitted = false;
  users;
  user: string;

  course = {
    description: '',
    longDescription: '',
    category: '',
  };

  ngOnInit(): void {
    this.getUsers();

    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
    });
  }

  onReset = () => {
    this.submitted = false;
    this.registerForm.reset();
  }

  getUsers = (): void => {
    this.userService.getUsers()
      .subscribe(value => {
        console.log(value);
      }, error => {
        console.log(error);
      });
  }

  onAddUser = (data: UserModel) => {
    console.log(data);
    this.userService.saveUser(data)
      .subscribe(value => {
          alert('Utilisateur ajouté avec succès');
          this.router.navigateByUrl('/users').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

  onUpdateUser = (data: UserModel) => {
    console.log(data);
    this.userService.updateUser(data)
      .subscribe(value => {
          alert('users ajouté avec succès');
          this.router.navigateByUrl('/users').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  };

  onDeleteUser = (data: UserModel) => {
    console.log(data);
    this.userService.deleteUser(data.id)
      .subscribe(value => {
          alert('user supprimé avec succès');
          this.router.navigateByUrl('/users').then(r => console.log(r));
        },
        error => {
          console.log(error);
        });
  }

  onAdd = (data: UserModel) => {
    this.onAddUser(data);
    this.getUsers();
  };

  onEdit = (data: UserModel) => {
    this.onUpdateUser(data);
  }

  onDelete = (data: UserModel) => {
    this.onDeleteUser(data);
    this.getUsers();
  }

  openEditDialog(user: UserModel) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      user
    };

    const dialogRef = this.dialog.open(EditUserComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);
        user.nom = val.nom;
        this.onEdit(user);
      }
    );
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(AddUserComponent,
      dialogConfig)


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);

        this.onAddUser(val);

      }
    );

  }
}
