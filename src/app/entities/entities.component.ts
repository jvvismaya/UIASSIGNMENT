import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {
  filterText:string='';
userData:any=[];
  constructor(private userdataService:UserdataService){

   this.userdataService.getData().subscribe(data=>{
    console.log(data);
    this.userData = data;
   })
    
  }


}
 


