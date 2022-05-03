import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { NavbarCatalogComponent } from '../../shared/navbar-catalog/navbar-catalog.component';
import { ItemComponent } from './components/item/item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TShirtsComponent } from './pages/t-shirts/t-shirts.component';
import { JeansComponent } from './pages/jeans/jeans.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { HatsComponent } from './pages/hats/hats.component';
import { DressesComponent } from './pages/dresses/dresses.component';
import { JacketsComponent } from './pages/jackets/jackets.component';


@NgModule({
  declarations: [
    CatalogComponent,
    MenComponent,
    WomenComponent,
    NavbarCatalogComponent,
    ItemComponent,
    TShirtsComponent,
    JeansComponent,
    ShoesComponent,
    HatsComponent,
    DressesComponent,
    JacketsComponent
  ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        FontAwesomeModule
    ]
})
export class CatalogModule { }
