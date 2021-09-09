import { DriverState } from '../enums/driver-state.enum';

export class Driver {
  public id = '';
  public firstName = '';
  public lastName = '';
  public state: DriverState = DriverState.Ready;
}
