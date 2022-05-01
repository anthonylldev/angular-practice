import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { NavbarCatalogComponent } from './navbar-catalog/navbar-catalog.component';


@NgModule({
  declarations: [
    CatalogComponent,
    MenComponent,
    WomenComponent,
    NavbarCatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
