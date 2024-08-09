import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberParityService {
  httpClient = inject(HttpClient);

  data = 55;

  constructor() {
    console.log(this.httpClient);
    //this.httpClient.get('http://google.com').subscribe();
  }
}
