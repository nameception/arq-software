import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path: 'perfil',
    component: TesteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
