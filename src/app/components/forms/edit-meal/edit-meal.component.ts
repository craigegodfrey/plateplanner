import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html'
})
export class EditMealComponent implements OnInit {
  @HostBinding('class.edit-meal-form-wrapper') bool = true;

  constructor() { }

  ngOnInit() {
  }

}
