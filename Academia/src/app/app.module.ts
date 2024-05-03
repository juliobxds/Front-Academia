import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioService } from './services/funcionario.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutprojectComponent } from './components/pages/aboutproject/aboutproject.component';
import { AddFuncionarioComponent } from './components/pages/add-funcionario/add-funcionario.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutprojectComponent,
    AddFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
