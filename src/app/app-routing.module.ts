import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHoodsComponent } from './component/all-hoods/all-hoods.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './auth.service'

const routes: Routes = [
  {path: 'signup',component:SignupFormComponent},
  {path: 'login',component:LoginFormComponent},
  {path: '', component: ListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '',pathMatch: 'full'},
  { path: 'all-hoods', component: AllHoodsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
