import { Component,OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message:string;
  constructor(private messageService : MessageService){}

  ngOnInit():void{
    this.messageService.ReceiveMessage().subscribe((a)=>{
      this.message = a;
    })
  }

  sendMessage(message:string){
    this.messageService.sendMessage(message);
  }

}
