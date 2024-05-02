import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';

import { FuncionarioService } from './services/funcionario.service';

import { funcionario } from './models/funcionario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Academia';

  funcionarios: funcionario[] = []

  constructor(private funcionarioService: FuncionarioService) {
  }

  GetFuncionario() {
    this.funcionarioService.getAllFuncionarios().subscribe(funcionarios => this.funcionarios = funcionarios)
  }


}
