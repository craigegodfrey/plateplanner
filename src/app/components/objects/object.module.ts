
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlateComponent } from './plate/plate.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent, ToolbarButtonComponent } from './toolbar/toolbar.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlateComponent,
    MenuComponent,
    ToolbarComponent,
    ToolbarButtonComponent,
    TitlebarComponent,
  ],
  exports:      [ 
    PlateComponent,
    MenuComponent,
    ToolbarComponent,
    ToolbarButtonComponent,
    TitlebarComponent,
    CommonModule, 
  ]
})
export class ObjectModule { }