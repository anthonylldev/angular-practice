import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import {MenComponent} from "./pages/men/men.component";
import {WomenComponent} from "./pages/women/women.component";
import {TShirtsComponent} from "./pages/t-shirts/t-shirts.component";
import {JeansComponent} from "./pages/jeans/jeans.component";
import {ShoesComponent} from "./pages/shoes/shoes.component";
import {HatsComponent} from "./pages/hats/hats.component";
import {JacketsComponent} from "./pages/jackets/jackets.component";
import {DressesComponent} from "./pages/dresses/dresses.component";

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent},
  { path: 'item-extended/:idItem', loadChildren: () => import('../../modules/item-extended/item-extended.module').then(m => m.ItemExtendedModule) },
  { path: 't-shirts', component: TShirtsComponent },
  { path: 't-shirts/:gender', component: TShirtsComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 'jeans/:gender', component: JeansComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'shoes/:gender', component: ShoesComponent },
  { path: 'hats', component: HatsComponent },
  { path: 'hats/:gender', component: HatsComponent },
  { path: 'jackets', component: JacketsComponent },
  { path: 'jackets/:gender', component: JacketsComponent },
  { path: 'dresses', component: DressesComponent },
  { path: 'dresses/:gender', component: DressesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
