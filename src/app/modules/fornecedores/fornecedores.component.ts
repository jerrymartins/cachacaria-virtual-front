import {Component} from "@angular/core";
import {FornecedorDTO} from "../../api";

export type ActionType = 'list' | 'register';

@Component({
  selector: 'fornecedores-page',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent {
  private action: ActionType = 'list';
  private fornecedorUpdate: FornecedorDTO;

  get listData() {

    return this.action === 'list';
  }

  get registerData() {
    return this.action === 'register';
  }

  toggleAction(type: ActionType) {
    this.action = type;
  }

  public updateDate(fornecedor: FornecedorDTO){
    this.fornecedorUpdate = fornecedor;
    this.toggleAction('register');
  }

  public clear(event: any){
    this.fornecedorUpdate = event;
  }
}
