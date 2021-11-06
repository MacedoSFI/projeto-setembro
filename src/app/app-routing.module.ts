import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  //mudei para login. antes: { path: '', pathMatch: 'full', redirectTo:'courses'},
{
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent }//não sei se funciona.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
