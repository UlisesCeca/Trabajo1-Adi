import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public messages: string[];
  public loading: boolean;
  private step1Value: number;
  private step2Value: number;
  private step3Value: number;
  private

  constructor(private http: HttpProvider) {
    this.messages = [];
    this.loading = true;
  }

  public ionViewDidEnter(): void {
    this.start();
  }

  private async start(): Promise<void> {
    await this.step1();
    await this.step2();
    await this.step3();
    await this.step4();
  }

  private step1(): Promise<void> {
    return new Promise(resolve => {
      this.http.step1().then(data => {
        this.step1Value = data.value;
        this.messages.push("Paso 1 finalizado. Valor obtenido: " + data.value);
        resolve();
      });
    });
  }

  private step2(): Promise<void> {
    return new Promise(resolve => {
      this.http.step2().then(data => {
        this.step2Value = data.value;
        this.messages.push("Paso 2 finalizado. Valor obtenido: " + data.value);
        resolve();
      });
    });
  }

  private step3(): Promise<void> {
    return new Promise(resolve => {
      this.http.step3().then(data => {
        this.step3Value = data.value;
        switch (data.value) {
          case "-":
            this.step3Value = this.step1Value - this.step2Value;
            this.messages.push("Paso 3 finalizado. La operación es una resta. Resultado: " + this.step1Value + " - " + this.step2Value + " = " + this.step3Value);
            break;

          case "+":
            this.step3Value = this.step1Value + this.step2Value;
            this.messages.push("Paso 3 finalizado. La operación es una suma. Resultado: " + this.step1Value + " + " + this.step2Value + " = " + this.step3Value);
            break;

          case "/":
            this.step3Value = this.step1Value / this.step2Value;
            this.messages.push("Paso 3 finalizado. La operación es una división. Resultado: " + this.step1Value + " / " + this.step2Value + " = " + this.step3Value);
            break;

          case "*":
            this.step3Value = this.step1Value * this.step2Value;
            this.messages.push("Paso 3 finalizado. La operación es una multiplicación. Resultado: " + this.step1Value + " * " + this.step2Value + " = " + this.step3Value);
            break;

          default:
            this.messages.push("Paso 3 finalizado. No se ha podido determinar el tipo de operacion");
            break;
        }
        resolve();
      });
    });
  }

  private step4(): Promise<void> {
    return new Promise(resolve => {
      this.http.step4(this.step3Value).then(data => {
        this.messages.push("Paso 4 finalizado. Respuesta del servidor: " + JSON.stringify(data));
        this.loading = false;
        resolve();
      });
    });
  }

}
