import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'https://www.ins.gov.co/Noticias/_api';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get(
      this.REST_API_SERVER +
        "/lists/getbytitle('Páginas')/items?$orderby=Created desc"
    );
  }
}
