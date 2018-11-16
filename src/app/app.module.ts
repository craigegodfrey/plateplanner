import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ObjectModule } from './components/objects/object.module';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/forms/settings/settings.component';
import { AddMealComponent } from './components/forms/add-meal/add-meal.component';
import { EditMealComponent } from './components/forms/edit-meal/edit-meal.component';
import { MainComponent } from './components/pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AddMealComponent,
    EditMealComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
