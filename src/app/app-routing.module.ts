import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'first-component/:id', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'second-component/:id', component: SecondComponent },
  { path: '**', component: PageNotFoundComponentComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
