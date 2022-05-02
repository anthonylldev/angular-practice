import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { NavbarCatalogComponent } from '../../shared/navbar-catalog/navbar-catalog.component';
import { ItemComponent } from './components/item/item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    CatalogComponent,
    MenComponent,
    WomenComponent,
    NavbarCatalogComponent,
    ItemComponent
  ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        FontAwesomeModule
    ]
})
export class CatalogModule { }
