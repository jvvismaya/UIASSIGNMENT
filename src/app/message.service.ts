import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<string>();

  constructor() { }

  sendMessage(message:string){
    this.subject.next(message);
  }
  ReceiveMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
