import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html'
})
export class TitlebarComponent implements OnInit {
  @HostBinding('class.titlebar-wrapper') bool = true;

  constructor() { }

  ngOnInit() {
  }

}
