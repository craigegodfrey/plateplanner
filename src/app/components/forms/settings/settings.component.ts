import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  @HostBinding('class.settings-wrapper') bool = true;

  constructor() { }

  ngOnInit() {
  }

}
