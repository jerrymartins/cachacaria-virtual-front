import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FornecedorDTO} from "../../../../api";
import {FornecedoresService} from "../../fornecedores.service";
import {NotifierService} from "angular-notifier";
import {Messages} from "../../../../utils/Messages";
import {TypeMessages} from "../../../../utils/TypeMessages";

@Component({
    selector: 'cadastro-fornecedores-page',
    templateUrl: './cadastro-fornecedores.component.html',
    styleUrls: ['./cadastro-fornecedores.component.scss']
})

export class CadastroFornecedoresComponent implements OnInit{
    @Input() fornecedorUpdate: FornecedorDTO;
    @Input() clear: boolean = false;

    private form: FormGroup;
    private action: string;
    private readonly notifier: NotifierService;

    private fornecedor: FornecedorDTO = new class implements FornecedorDTO {
        cnpj: string;
        email: string;
        id: number;
        nome: string;
    }

    constructor(
      private fb: FormBuilder,
      private fornecedorService: FornecedoresService,
      notifierService: NotifierService){

        this.notifier = notifierService;
    }
    ngOnInit(): void {
        if (this.fornecedorUpdate) {
            this.action = 'Atualizar Fornecedor';
            this.fornecedor = this.fornecedorUpdate;

        } else {
            this.action = 'Cadastrar Fornecedor';

            this.fornecedor.id = 0;
            this.fornecedor.nome = '';
            this.fornecedor.cnpj = '';
            this.fornecedor.email = '';
        }

        this.formBuild();
    }

    public formBuild(){
        this.form = this.fb.group({
            id: [this.fornecedor.id],
            nome: [this.fornecedor.nome, Validators.required],
            cnpj: [this.fornecedor.cnpj, Validators.required],
            email: [this.fornecedor.email, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])]
        });
    }

    public onSubmit(){
        this.fornecedorService.save(this.fornecedor).subscribe(res => {
            this.form.reset();
            this.notifier.notify( TypeMessages.sucess, this.fornecedorUpdate ? Messages.providerUpdatedSucess : Messages.providerRegisterSucess )
        }, err => {
            this.notifier.notify( TypeMessages.error, this.fornecedorUpdate ? Messages.providerUpdatedFail : Messages.providerRegisterFail )
        });
    }
}
