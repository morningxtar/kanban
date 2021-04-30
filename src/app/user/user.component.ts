import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserModel} from '../models/user.model';
import {EditUserComponent} from './edit-user/edit-user.component';
import {AddUserComponent} from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,
              public dialog: MatDialog) {
  }

  users;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers = (): void => {
    this.userService.getUsers()
      .subscribe(value => {
        this.users = value;
      }, error => {
        console.log(error);
      });
  }

  onAddUser = (data: UserModel) => {
    this.userService.saveUser(data)
      .subscribe(value => {
          this.router.navigateByUrl('/users');
        },
        error => {
          console.log(error);
        });
  }

  onUpdateUser = (data: UserModel) => {
    this.userService.updateUser(data)
      .subscribe(value => {
          this.router.navigateByUrl('/users');
        },
        error => {
          console.log(error);
        });
  }

  onDeleteUser = (data: UserModel) => {
    this.userService.deleteUser(data.id)
      .subscribe(value => {
          this.router.navigateByUrl('/users');
        },
        error => {
          console.log(error);
        });
  }


  onAdd = (data: UserModel) => {
    this.onAddUser(data);
    this.getUsers();
  }

  onEdit = (data: UserModel) => {
    this.onUpdateUser(data);
  }

  onDelete = (data: UserModel) => {
    this.onDeleteUser(data);
    this.getUsers();
  }

  openEditDialog = (user: UserModel) => {
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
        if (val !== undefined) {
          user.Nom = val.Nom;
          user.Profession = val.Profession;
          user.Email = val.Email;
          this.onEdit(user);
        }
      }
    );
  }

  openAddDialog = () => {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(AddUserComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        console.log('Dialog output:', val);
        if (val !== undefined) {
          this.onAddUser(val);
        }
      }
    );

  }
}
