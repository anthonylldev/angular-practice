import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemExtendedComponent } from './item-extended.component';

const routes: Routes = [
  { path: '', component: ItemExtendedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemExtendedRoutingModule { }
