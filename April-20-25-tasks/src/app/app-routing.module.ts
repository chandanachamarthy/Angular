import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/home/details/details.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"complaint",component: ComplaintComponent},
  {path: "details/:id", component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
