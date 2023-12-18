import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateformsL2Component } from './templateforms-l2/templateforms-l2.component';
import { RformComponent } from './rform/rform.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { AccessRouteParamsComponent } from './access-route-params/access-route-params.component';
import { T1ContainerComponent } from './t1-container/t1-container.component';
import { T1AssociateComponent } from './t1-associate/t1-associate.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { T2ContainerComponent } from './t2-container/t2-container.component';
import { T3containerComponent } from './t3container/t3container.component';
import { T4containerComponent } from './t4container/t4container.component';
import { T3ChildComponent } from './t3-child/t3-child.component';
import { HighlightDirective } from './highlight.directive';
import { UseDirectiveComponent } from './use-directive/use-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    BuiltInPipesComponent,
    TemplateformsL2Component,
    RformComponent,
    LoginComponent,
    AccessRouteParamsComponent,
    T1ContainerComponent,
    T1AssociateComponent,
    ViewchildComponent,
    T2ContainerComponent,
    T3containerComponent,
    T4containerComponent,
    T3ChildComponent,
    HighlightDirective,
    UseDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
