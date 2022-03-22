import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private httpClient: HttpClient) {}

  getHello(name?: string): Observable<string> {
    return this.httpClient.get<string>('hello/');
  }

  getQuote(): Observable<string> {
    return this.httpClient.get<string>('hello/random-quote/');
  }
}
