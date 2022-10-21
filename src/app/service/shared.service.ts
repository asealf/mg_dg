import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SharedService {
  private baseUrl:string;
  private demo:number;

  setBaseUrl(base_url:string) {
    this.baseUrl = base_url;
  }

  getBaseUrl():string{

      return this.baseUrl;
  }
}