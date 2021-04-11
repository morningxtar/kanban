import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { TagComponent } from './tag/tag.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';
import { BoardComponent } from './board/board.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full'},
  {path: 'board', component: BoardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
