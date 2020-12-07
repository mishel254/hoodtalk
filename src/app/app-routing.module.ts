import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHoodsComponent } from './component/all-hoods/all-hoods.component';

const routes: Routes = [
  { path: '', redirectTo: '',pathMatch: 'full'},
  { path: 'all-hoods', component: AllHoodsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
