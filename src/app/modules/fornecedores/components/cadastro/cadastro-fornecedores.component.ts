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
        this.formBuild();
        this.action = 'Cadastrar Fornecedor';
        //console.log(this.fornecedorUpdate);
    }

    public formBuild(){
        this.form = this.fb.group({
            id: [''],
            nome: ['', Validators.required],
            cnpj: [''],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])]
        });
    }

    public onSubmit(){
        this.fornecedor.nome = this.form.value.nome;
        this.fornecedor.email = this.form.value.email;
        this.fornecedor.cnpj = this.form.value.cnpj;
        this.form.reset();

        this.fornecedorService.save(this.fornecedor).subscribe(res => {
            this.notifier.notify( TypeMessages.sucess, Messages.providerRegisterSucess )
        }, err => {
            this.notifier.notify( TypeMessages.error, Messages.providerRegisterFail )
        });
    }
}
