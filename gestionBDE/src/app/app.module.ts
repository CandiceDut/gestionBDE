import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoireeComponent } from './soiree/soiree.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { GoodieComponent } from './goodie/goodie.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { NewSoireeComponent } from './new-soiree/new-soiree.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {AsyncPipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { FormGoodieComponent } from './form-goodie/form-goodie.component';


@NgModule({
  declarations: [
    AppComponent,
    SoireeComponent,
    HeaderComponent,
    ReservationComponent,
    HomeComponent,
    EtudiantComponent,
    GoodieComponent,
    NewReservationComponent,
    NewSoireeComponent,
    FormEtudiantComponent,
    FormGoodieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatStepperModule,
    AsyncPipe,
    MatTableModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
