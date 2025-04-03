import { Injectable } from '@angular/core';

@Injectable()
// {providedIn: 'root'}
export class TimeService {
  private time = new Date();
  getTime(): string {
    return this.time.toLocaleTimeString();
  }
}
