import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  num1: number;
  Cm_Me: number;
  Cm_Km: number;
  Me_Cm: number;
  Me_Km: number;
  Km_Me: number;
  Km_Cm: number;
  

  resultado: any;

  Cm_To_Me() {
    this.Cm_Me = this.num1 / 100;
  }
  Cm_To_Km() {
    this.Cm_Km = this.num1 / 100000;
  }
  Me_To_Cm() {
    this.Me_Cm = this.num1 * 100;
  }
  Me_To_Km() {
    this.Me_Km = this.num1 / 1000;
  }
  Km_To_Me() {
    this.Km_Me = this.num1 * 1000;
  }
  Km_To_Cm() {
    this.Km_Cm = this.num1 * 100000;
  }
}