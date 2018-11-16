import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html'
})
export class AddMealComponent implements OnInit {
  @HostBinding('class.add-meal-form-wrapper') bool = true;

  constructor() { }

  ngOnInit() {
  }

}
