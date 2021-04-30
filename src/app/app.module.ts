
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {TagComponent} from './tag/tag.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {SectionComponent} from './section/section.component';
import {UserComponent} from './user/user.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditTagComponent} from './tag/edit-tag/edit-tag.component';
import {EditFicheComponent} from './board/edit-fiche/edit-fiche.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AddTagComponent} from './tag/add-tag/add-tag.component';
import {AddFicheComponent} from './board/add-fiche/add-fiche.component';
import {MatSelectModule} from '@angular/material/select';
import {AddSectionComponent} from './section/add-section/add-section.component';
import {EditSectionComponent} from './section/edit-section/edit-section.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent},
  {path: 'tags', component: TagComponent},
  {path: 'sections', component: SectionComponent},
  {path: 'users', component: UserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    BoardComponent,
    NavbarComponent,
    SectionComponent,
    UserComponent,
    EditTagComponent,
    EditFicheComponent,
    AddTagComponent,
    AddFicheComponent,
    AddSectionComponent,
    EditSectionComponent,
    AddUserComponent,
    EditUserComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSliderModule,
    RouterModule,
    HttpClientModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes),
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
