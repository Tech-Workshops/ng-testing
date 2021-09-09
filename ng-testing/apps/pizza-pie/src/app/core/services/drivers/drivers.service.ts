import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverState } from '../../../shared/enums/driver-state.enum';
import { Driver } from '../../../shared/models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private uri = 'http://localhost:4300/drivers';

  constructor(private httpClient: HttpClient) { }

  public getDrivers(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(this.uri);
  }

  public updateDriverState(driver: Driver, state: DriverState): void {
    if (driver?.state !== state) {
      driver.state = state;
      this.httpClient.put(this.uri, driver);
    }
  }
}
