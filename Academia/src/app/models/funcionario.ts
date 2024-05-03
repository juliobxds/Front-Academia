
export interface funcionario {
  id?: number,
  nome: string,
  email: string,
  celular: string,
  criadoEm?: Date,
  modificadoEm?: Date
  endereco: [{  id?: number, logradouro: string, rua: string, cep: string, cidade: string, estado: string, ativo?: string,}]
}
