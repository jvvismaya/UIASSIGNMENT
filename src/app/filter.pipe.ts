import { Pipe, PipeTransform } from '@angular/core';
import { EntitiesComponent } from './entities/entities.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userData:any[],filterText:string) {
    if(userData.length===0 || filterText ===''){
      //if(!userData || !filterText){
      return userData;
    }else{
      return userData.filter((users)=>{
        return  users.model.toLowerCase()===filterText.toLowerCase() ||
          users.os.toLowerCase()===filterText.toLowerCase() ||
          users.currentclient.toLowerCase()===filterText.toLowerCase()||
          users.status.toLowerCase()===filterText.toLowerCase()||
          users.location.toLowerCase()===filterText.toLowerCase()||
          users.typeofdevice===filterText
           

      })
    }
  }

}
