import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemExtendedRoutingModule } from './item-extended-routing.module';
import { ItemExtendedComponent } from './item-extended.component';


@NgModule({
  declarations: [
    ItemExtendedComponent
  ],
  imports: [
    CommonModule,
    ItemExtendedRoutingModule
  ]
})
export class ItemExtendedModule { }
