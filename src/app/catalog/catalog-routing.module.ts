import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import {MenComponent} from "./men/men.component";
import {WomenComponent} from "./women/women.component";

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
