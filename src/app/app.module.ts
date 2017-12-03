import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyseotasksComponent } from './components/myseotasks/myseotasks.component';
import { MytasksComponent } from './components/mytasks/mytasks.component';
import {TitanService} from './services/titan/titan.service';
import { McinfoComponent } from './components/mcinfo/mcinfo.component';
import { SeoinfoComponent } from './components/seoinfo/seoinfo.component';
import { SeodetailsComponent } from './components/seodetails/seodetails.component';
import { NavbarsecondaryComponent } from './components/navbarsecondary/navbarsecondary.component'
// Create Routes
const appRoutes: Routes = [
  {path:'', component: MytasksComponent},
  {path:'seo/:id/:enterpriseItemId', component: SeoinfoComponent}
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
    NavbarsecondaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [TitanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
