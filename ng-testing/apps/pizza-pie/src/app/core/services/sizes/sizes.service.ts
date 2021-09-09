import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaSize } from '../../../shared/models/pizza-size.model';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  private getUrl = 'http://localhost:4300/sizes';
  constructor(private httpClient: HttpClient) { }

  public getSizes(): Observable<PizzaSize[]> {
    return this.httpClient.get<PizzaSize[]>(this.getUrl);
  }
}
