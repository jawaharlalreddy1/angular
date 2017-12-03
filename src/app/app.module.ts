import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule,MatInputModule, MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyseotasksComponent } from './components/myseotasks/myseotasks.component';
import { MytasksComponent } from './components/mytasks/mytasks.component';
import {TitanService} from './services/titan/titan.service';
import { McinfoComponent } from './components/mcinfo/mcinfo.component';
import { SeoinfoComponent } from './components/seoinfo/seoinfo.component';
import { SeodetailsComponent } from './components/seodetails/seodetails.component';
import { NavbarsecondaryComponent } from './components/navbarsecondary/navbarsecondary.component';
import { NotesComponent } from './components/notes/notes.component';
import { TaskHistoryComponent } from './components/task-history/task-history.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteComponent } from './components/note/note.component'
// Create Routes
const appRoutes: Routes = [
  {path:'', component: MytasksComponent},
  {path:'seo/:id/:enterpriseItemId/:pid', component: SeoinfoComponent}
 // ,{path:'notes', component: NotesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyseotasksComponent,
    MytasksComponent,
    McinfoComponent,
    SeoinfoComponent,
    SeodetailsComponent,
    NavbarsecondaryComponent,
    NotesComponent,
    TaskHistoryComponent,
    AddNoteComponent,
    NoteComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    NgbModule.forRoot()
  ],
  providers: [TitanService],
  entryComponents:[NotesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
