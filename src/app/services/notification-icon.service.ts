import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationIconService {
  subject = new Subject<boolean>();
  counter = 0;

  updating(): void {
    this.counter += 1;
    this.subject.next(true);
  }

  completed(): void {
    this.counter -= 1;
    if (this.counter === 0 ) { this.subject.next(false); }
  }

  getObservable(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
