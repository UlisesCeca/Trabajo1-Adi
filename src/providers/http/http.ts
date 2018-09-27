import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

  constructor(private http: HttpClient) { }

  public step1(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/step1").toPromise();
  }
  
  public step2(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/op2").toPromise();
  }
  
  public step3(): Promise<any> {
    return this.http.get("http://httptask-142719.appspot.com/05706852/operator").toPromise();
  }
  
  public step4(value: number): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders()
    .append("Content-Type", "application/json");
    return this.http.post("http://httptask-142719.appspot.com/05706852/results", "{ \"value\": " + value + "}", {headers: headers}).toPromise();
  }

}
