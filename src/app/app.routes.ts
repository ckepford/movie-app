import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent} from './homepage/homepage.component';
import { MovieDetailComponent} from './movie-detail/movie-detail.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  }, {
    path: 'movie/:id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
