import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges{
  message:string;

  constructor(private messageService:MessageService){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  sendMessage(message:string){
    this.messageService.sendMessage(message);
    //console.warn(message);
  }
  ngOnInit():void{
    this.messageService.ReceiveMessage().subscribe((a)=>{
      this.message =a;
    })
  }
  /*ngOnchanges(changes : SimpleChanges){
    
    this.messageService.ReceiveMessage().subscribe((changes)=>{
      this.message = changes;
      console.log(changes);
    })

  }*/

}

  


