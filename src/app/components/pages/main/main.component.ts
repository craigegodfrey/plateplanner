import { Component, OnInit, HostBinding } from '@angular/core';

import { Plates } from '../../../interfaces/plates';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  @HostBinding('class.main-wrapper') bool = true;
  
  plates: Plates[];

  constructor() { }

  ngOnInit() {
    this.plates = [
      {name: 'One1'},
      {name: 'Two2'},
      {name: 'Three3'},
      {name: 'Four4'},
      {name: 'Five5'},
    ];
  }
}
