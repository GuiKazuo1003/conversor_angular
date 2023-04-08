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

  public ConvertGraQui() {
    this.GraQui = this.num1 / 1000;
  }
  public ConvertGraLi() {
    this.GraLi = this.num1 / 453.59237;
  }
  public ConvertQuiGra() {
    this.QuiGra = this.num1 * 1000;
  }
  public ConvertQuiLi() {
    this.QuiLi = this.num1 * 2.20462;
  }
  public ConvertLiGra() {
    this.LiGra = this.num1 * 453.59237;
  }
  public ConvertLiQui() {
    this.LiQui = this.num1 / 2.20462;
  }
}
