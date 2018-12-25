import {Component} from "@angular/core";
import {FornecedorDTO} from "../../api";

export type ActionType = 'list' | 'register' | 'profile';

@Component({
  selector: 'fornecedores-page',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent {
  private action: ActionType = 'list';
  private fornecedor: FornecedorDTO;

  get listData() {

    return this.action === 'list';
  }

  get registerData() {
    return this.action === 'register';
  }

  get profile(){
    return this.action === 'profile';
  }

  toggleAction(type: ActionType) {
    this.action = type;
  }

  public updateDate(fornecedor: FornecedorDTO){
    this.fornecedor = fornecedor;
    this.toggleAction('register');
  }

  public clear(event: any){
    this.fornecedor = event;
  }

  public showProfile(fornecedor: FornecedorDTO){
    this.fornecedor = fornecedor;
    this.toggleAction('profile');
  }
}
