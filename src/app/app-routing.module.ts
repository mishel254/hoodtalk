import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { InterfaceComponent } from  './components/interface/interface.component'
import { AuthGuard } from './services/auth.service'

const routes: Routes = [
  {path: 'signup',component:SignupFormComponent},
  {path: 'login',component:LoginFormComponent},
  {path: '', component: InterfaceComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
