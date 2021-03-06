import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemExtendedRoutingModule } from './item-extended-routing.module';
import { ItemExtendedComponent } from './item-extended.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    ItemExtendedComponent
  ],
    imports: [
        CommonModule,
        ItemExtendedRoutingModule,
        FontAwesomeModule
    ]
})
export class ItemExtendedModule { }
