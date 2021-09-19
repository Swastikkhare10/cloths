import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAndItemSectionComponent } from './category-and-item-section/category-and-item-section.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'category/:id' , component: CategoryAndItemSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
