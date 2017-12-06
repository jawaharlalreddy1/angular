import { environment } from './../environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyseotasksComponent } from './components/myseotasks/myseotasks.component';
import { MytasksComponent } from './components/mytasks/mytasks.component';
import { TitanService } from './services/titan/titan.service';
import { McinfoComponent } from './components/mcinfo/mcinfo.component';
import { SeoinfoComponent } from './components/seoinfo/seoinfo.component';
import { SeodetailsComponent } from './components/seodetails/seodetails.component';
import { NavbarsecondaryComponent } from './components/navbarsecondary/navbarsecondary.component';
import { NotesComponent } from './components/notes/notes.component';
import { TaskHistoryComponent } from './components/task-history/task-history.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteComponent } from './components/note/note.component';
import { EsbService } from './services/ESB/esb.service';
import { LoginComponent } from './components/login/login.component';
import {FlashMessagesModule} from 'angular2-flash-messages/module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guards';
import {SeoWorklistComponent} from '../app/components/seo-worklist/seo-worklist.component'
import { CamundaService } from './services/camunda/camunda.service';
// Create Routes
const appRoutes: Routes = [
  { path: '', component: MytasksComponent,canActivate:[AuthGuard] },
  { path: 'seo/:id/:enterpriseItemId/:pid/:enterpriseAcctId', component: SeoinfoComponent,canActivate:[AuthGuard] },
  { path: 'seogroup', component: SeoWorklistComponent,canActivate:[AuthGuard] },
  // ,{path:'notes', component: NotesComponent}
  {path:'login', component: LoginComponent},
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
    LoginComponent,
    SeoWorklistComponent,
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
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase,'clientpanel'),
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    TitanService,
    EsbService,
  AngularFireDatabase,
  AngularFireDatabaseModule,
  AuthService,
  AuthGuard,
  CamundaService
],  
  entryComponents: [
    NotesComponent,
    TaskHistoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
