import { Component } from '@angular/core';

@Component({
  selector: 'app-ruletti',
  templateUrl: './ruletti.component.html',
  styleUrls: ['./ruletti.component.css']
})
export class RulettiComponent {
  showResepti = false;
  randomiser: Number | undefined;


  onShowResepti() {
    this.showResepti = !this.showResepti;
    this.randomiser = Math.floor((Math.random()*3)+1);
  }

  ngOnInit(): void {
    
  }

}

