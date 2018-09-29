import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class HttpProvider {

  constructor(private http: HttpClient) { }

  public step11(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/step1").toPromise();
  }
  
  public step12(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/op2").toPromise();
  }
  
  public step13(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/operator").toPromise();
  }
  
  public step14(value: number): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders()
    .append("Content-Type", "application/json");
    return this.http.post("http://httptask-142719.appspot.com/05706852/results", { value: value }, {headers: headers}).toPromise();
  }
  
  public step21(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/step2").toPromise();
  }
  
  public step22(value: string): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders()
    .append("Content-Type", "application/json");
    return this.http.put("http://httptask-142719.appspot.com/05706852/dni", { value: value }, {headers: headers}).toPromise();
  }

  public step23(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/checkPUT").toPromise();
  }
  
  public step24(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/dni").toPromise();
  }
  
  public step31(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/step3").toPromise();
  }
  
  public step32(value: any): Promise<any> {
    return this.http.delete("http://httptask-142719.appspot.com/05706852/delete/" + value).toPromise();
  }
  
  public step33(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/checkDEL").toPromise();
  }

  public step41(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/step4").toPromise();
  }
  
  public step42(): Promise<any> {
    return this.http.options("http://httptask-142719.appspot.com/05706852/options", {observe: 'response'}).toPromise()
  }
  
  public step44(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/checkOPT").toPromise()
  }
  
  public step45(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/options").toPromise()
  }
  
  public step43(value: any): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders()
    .append("Content-Type", "application/json");
    return this.http.put("http://httptask-142719.appspot.com/05706852/options", {value: value}, {headers: headers}).toPromise()
  }

}
