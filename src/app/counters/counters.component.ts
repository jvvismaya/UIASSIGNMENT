import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent {

  countnumber = 0;

  resetbtn(){
    this.countnumber = 0;
  }

  increasebtn(){
    //this.countnumber = this.countnumber+1;
    this.countnumber +=1;
  }
  decreasebtn(){
    //this.countnumber = this.countnumber -1;
    this.countnumber -=1;
  }

}
