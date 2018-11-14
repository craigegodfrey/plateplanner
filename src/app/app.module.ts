import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/forms/settings/settings.component';
import { AddMealComponent } from './components/forms/add-meal/add-meal.component';
import { PlateComponent } from './components/objects/plate/plate.component';
import { MenuComponent } from './components/objects/menu/menu.component';
import { MainComponent } from './components/pages/main/main.component';
import { ToolbarComponent } from './components/objects/toolbar/toolbar.component';
import { EditMealComponent } from './components/forms/edit-meal/edit-meal.component';
import { TitlebarComponent } from './components/objects/titlebar/titlebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    AddMealComponent,
    PlateComponent,
    MenuComponent,
    MainComponent,
    ToolbarComponent,
    EditMealComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
