import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutprojectComponent } from './components/pages/aboutproject/aboutproject.component';
import { AddFuncionarioComponent } from './components/pages/add-funcionario/add-funcionario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutprojectComponent},
  {path: 'funcionario/new', component: AddFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
