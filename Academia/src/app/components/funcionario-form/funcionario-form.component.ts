import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  @Input() btnText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
