import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public messages1: string[];
  public messages2: string[];
  public messages3: string[];
  public messages4: string[];
  public loading1: boolean;
  public loading2: boolean;
  public loading3: boolean;
  public loading4: boolean;
  private step1Value: number;
  private step2Value: number;
  private step3Value: number;
  private step4value: string;
  private step5value: any;
  private step6value: any;

  constructor(private http: HttpProvider) {
    this.messages1 = [];
    this.messages2 = [];
    this.messages3 = [];
    this.messages4 = [];
    this.loading1 = true;
    this.loading2 = true;
    this.loading3 = true;
    this.loading4 = true;
    this.step4value = "05706851";
  }

  public ionViewDidEnter(): void {
    this.start();
  }

  private async start(): Promise<void> {
    await this.step11();
    await this.step12();
    await this.step13();
    await this.step14();
    await this.step21();
    await this.step22();
    await this.step23();
    await this.step24();
    await this.step31();
    await this.step32();
    await this.step33();
    await this.step34();
    await this.step41();
    await this.step42();
    await this.step43();
    await this.step44();
    await this.step45();
  }

  private step11(): Promise<void> {
    return new Promise(resolve => {
      this.http.step11().then(data => {
        this.step1Value = data.value;
        this.messages1.push("Paso 1.1 finalizado. Valor obtenido: " + data.value);
        resolve();
      });
    });
  }

  private step12(): Promise<void> {
    return new Promise(resolve => {
      this.http.step12().then(data => {
        this.step2Value = data.value;
        this.messages1.push("Paso 1.2 finalizado. Valor obtenido: " + data.value);
        resolve();
      });
    });
  }

  private step13(): Promise<void> {
    return new Promise(resolve => {
      this.http.step13().then(data => {
        this.step3Value = data.value;
        switch (data.value) {
          case "-":
            this.step3Value = this.step1Value - this.step2Value;
            this.messages1.push("Paso 1.3 finalizado. La operación es una resta. Resultado: " + this.step1Value + " - " + this.step2Value + " = " + this.step3Value);
            break;

          case "+":
            this.step3Value = this.step1Value + this.step2Value;
            this.messages1.push("Paso 1.3 finalizado. La operación es una suma. Resultado: " + this.step1Value + " + " + this.step2Value + " = " + this.step3Value);
            break;

          case "/":
            this.step3Value = this.step1Value / this.step2Value;
            this.messages1.push("Paso 1.3 finalizado. La operación es una división. Resultado: " + this.step1Value + " / " + this.step2Value + " = " + this.step3Value);
            break;

          case "*":
            this.step3Value = this.step1Value * this.step2Value;
            this.messages1.push("Paso 1.3 finalizado. La operación es una multiplicación. Resultado: " + this.step1Value + " * " + this.step2Value + " = " + this.step3Value);
            break;

          default:
            this.messages1.push("Paso 1.3 finalizado. No se ha podido determinar el tipo de operacion");
            break;
        }
        resolve();
      });
    });
  }

  private step14(): Promise<void> {
    return new Promise(resolve => {
      this.http.step14(this.step3Value).then(data => {
        this.messages1.push("Paso 1.4 finalizado. Respuesta del servidor: " + JSON.stringify(data));
        this.loading1 = false;
        resolve();
      });
    });
  }

  private step21(): Promise<void> {
    return new Promise(resolve => {
      this.http.step21().then(data => {
        this.messages2.push("Paso 2.1 finalizado. Acción: " + data.action);
        resolve();
      });
    });
  }

  private step22(): Promise<void> {
    return new Promise(resolve => {
      this.http.step22(this.step4value).then(data => {
        this.messages2.push("Paso 2.2 finalizado. Respuesta del servidor: " + JSON.stringify(data));
        resolve();
      });
    });
  }

  private step23(): Promise<void> {
    return new Promise(resolve => {
      this.http.step23().then(data => {
        this.messages2.push("Paso 2.3 finalizado. Siguiente acción: " + data.action);
        this.loading2 = false;
        resolve();
      });
    });
  }

  private step24(): Promise<void> {
    return new Promise(resolve => {
      this.http.step24().then(data => {
        if (this.step4value == data.value) this.messages2.push("Paso 2.4 finalizado. Valor: " + data.value + ", coincide");
        else this.messages2.push("Paso 2.4 finalizado. Valor: " + data.value + ", no coincide");
        this.loading2 = false;
        resolve();
      });
    });
  }
  
  private step31(): Promise<void> {
    return new Promise(resolve => {
      this.http.step31().then(data => {
        this.messages3.push("Paso 3.1 finalizado. Vamos a borrar el primer valor de los siguientes: " + data.value);
        this.step5value = data.value[0];
        resolve();
      });
    });
  }
  
  
  private step32(): Promise<void> {
    return new Promise(resolve => {
      this.http.step32(this.step5value).then(data => {
        this.messages3.push("Paso 3.2 finalizado. Borrado primer elemento. Se ha borrado: " + this.step5value);
        resolve();
      });
    });
  }
  
  
  private step33(): Promise<void> {
    return new Promise(resolve => {
      this.http.step33().then(data => {
        this.messages3.push("Paso 3.3 finalizado. Respuesta petición: " + data.action);
        this.loading3 = false;
        resolve();
      });
    });
  }
  
  private step34(): Promise<void> {
    return new Promise(resolve => {
      this.http.step31().then(data => {
        this.messages3.push("Paso 3.4 finalizado. Valores después del DEL: " + data.value);
        this.loading3 = false;
        resolve();
      });
    });
  }
  
  private step41(): Promise<void> {
    return new Promise(resolve => {
      this.http.step41().then(data => {
        this.messages4.push("Paso 4.1 finalizado. Respuesta petición: " + data.action);
        resolve();
      });
    });
  }
  
  private step42(): Promise<void> {
    return new Promise(resolve => {
      this.http.step42().then(data => {
        this.messages4.push("Paso 4.2 finalizado. Métodos permitidos: " + data.headers.get("Allow"))
        this.step6value = data.headers.get("Allow");
        resolve();
      });
    });
  }
  
  private step44(): Promise<void> {
    return new Promise(resolve => {
      this.http.step44().then(data => {
        this.messages4.push("Paso 4.4 finalizado. Respuesta: " + JSON.stringify(data));
        resolve();
      });
    });
  }
  
  private step45(): Promise<void> {
    return new Promise(resolve => {
      this.http.step45().then(data => {
        this.messages4.push("Paso 4.5 finalizado. Respuesta petición: " + JSON.stringify(data));
        this.loading4 = false;
        resolve();
      });
    });
  }
  
  private step43(): Promise<void> {
    return new Promise(resolve => {
      this.http.step43(this.step6value).then(data => {
        this.messages4.push("Paso 4.3 finalizado. Escritos metodos a /options: " + JSON.stringify(data));
        resolve();
      });
    });
  }

}
