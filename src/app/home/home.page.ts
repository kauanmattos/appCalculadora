import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {
  }
  n1 = 0;
  n2 = 0;
  res = 0;

  // Exercicio da Calculadora

  somar() {
    this.res = this.n1 + this.n2;
  }
  subtrair() {
    this.res = this.n1 - this.n2;
  }
  multiplicar() {
    this.res = this.n1 * this.n2;
  }
  dividir() {
    if (this.n2 != 0) {
      this.res = this.n1 / this.n2;
    } else {
      this.res = 0;
    }
  }

// Exercicio 1

    valorDoacao=0;
    valorDolar=0;
    valorReais=0;


converter() {
  this.valorReais=this.valorDoacao*this.valorDolar;
}



}









