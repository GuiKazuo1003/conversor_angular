import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';
import { ConversorPesoComponent } from './conversor-peso/conversor-peso.component';

const routes: Routes = [
  { path: '', component: ConversorComponent },
  { path: 'peso', component: ConversorPesoComponent },
  { path: 'comprimento', component: ConversorComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent,ConversorComponent]
})
export class AppRoutingModule { }
