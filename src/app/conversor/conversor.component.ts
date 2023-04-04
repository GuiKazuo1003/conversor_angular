import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  num1: number;
  Cm_Me: number;
  Me_Cm: number;
  Km_Me: number;
  Me_Km: number;
  resultado: any;

  public ConvertCm_Me(){
    this.Cm_Me = this.num1 / 100;
  }
  public ConvertMe_Cm(){
    this.Me_Cm = this.num1 * 100;
  }
  public ConvertKm_Me(){
    this.Km_Me = this.num1 * 1000;
  }
  public ConvertMe_Km(){
    this.Me_Km = this.num1 / 1000;
  }
}
