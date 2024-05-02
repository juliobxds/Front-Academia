import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { funcionario } from '../models/funcionario';

@Injectable()
export class FuncionarioService {

  private url = environment.apiJ;

  constructor(private http: HttpClient) { }

  getAllFuncionarios() {
    return this.http.get<funcionario[]>(this.url = '/api/Funcionario/ListarTodos')
  }
}
