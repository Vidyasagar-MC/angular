import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RformComponent } from './rform/rform.component';
import { LoginComponent } from './login/login.component';
import { CheckTokenService } from './check-token.service';
import { AccessRouteParamsComponent } from './access-route-params/access-route-params.component';
import { T1ContainerComponent } from './t1-container/t1-container.component';
import { T2ContainerComponent } from './t2-container/t2-container.component';
import { UseDirectiveComponent } from './use-directive/use-directive.component';

const routes: Routes = [
  {path:'template/rforms', component:RformComponent, /*canActivate:[CheckTokenService]*/},
  {path:'login', component:LoginComponent},
  {path:'route/params/:p1/:p2', component:AccessRouteParamsComponent},
  {path:'c2c/type1',component:T1ContainerComponent},
  {path:'c2c/type2',component:T2ContainerComponent},
  {path:'highlight',component:UseDirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
