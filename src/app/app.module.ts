import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConversorPesoComponent } from './conversor-peso/conversor-peso.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  { path: 'conversor_angular/', component: ConversorComponent },
  { path: '', component: ConversorPesoComponent },
  { path: 'comprimento', component: ConversorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    ConversorPesoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,ConversorComponent,AppRoutingModule]
})
export class AppModule { }
