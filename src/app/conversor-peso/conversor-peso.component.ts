import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-peso',
  templateUrl: './conversor-peso.component.html',
  styleUrls: ['./conversor-peso.component.css']
})
export class ConversorPesoComponent {

  num1: number;

  GraQui: number;
  GraLi: number;
  QuiGra: number;
  QuiLi: number;
  LiGra: number;
  LiQui: number;

  resultado: any;

  Gra_To_Qui() {
    this.GraQui = this.num1 / 1000;
  }
  Gra_To_Li() {
    this.GraLi = this.num1 / 453.59237;
  }
  Qui_To_Gra() {
    this.QuiGra = this.num1 * 1000;
  }
  Qui_To_Li() {
    this.QuiLi = this.num1 * 2.20462;
  }
  Li_To_Gra() {
    this.LiGra = this.num1 * 453.59237;
  }
  Li_To_Qui() {
    this.LiQui = this.num1 / 2.20462;
  }
}
