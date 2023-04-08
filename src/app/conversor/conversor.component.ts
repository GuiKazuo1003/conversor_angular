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

}