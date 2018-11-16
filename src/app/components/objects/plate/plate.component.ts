import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html'
})
export class PlateComponent implements OnInit {
  @HostBinding('class.plate-wrapper') bool = true;

  constructor() { }

  ngOnInit() {
  }

}
