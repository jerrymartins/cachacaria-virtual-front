import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fornecedor,  ProdutoDTO} from "../../../../api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {ProdutosService} from "../../produtos.service";
import {TypeMessages} from "../../../../utils/TypeMessages";
import {Messages} from "../../../../utils/Messages";

@Component({
    selector: 'cadastro-produtos-page',
    templateUrl: './cadastro-produtos.component.html',
    styleUrls: ['./cadastro-produtos.component.scss']
})

export class CadastroProdutosComponent implements OnInit{
    @Input() produtoUpdate: ProdutoDTO;
    @Input() fornecedorId: number;
    @Input() clear: boolean = false;
    @Output() disableFormProduct = new EventEmitter();

    private form: FormGroup;
    private action: string;
    private readonly notifier: NotifierService;

    private produto: ProdutoDTO = new class implements ProdutoDTO {
        codProduto: string;
        descricao: string;
        fornecedor: Fornecedor;
        id: number;
        preco: number;
    }

    constructor(
      private fb: FormBuilder,
      private produtoService: ProdutosService,
      notifierService: NotifierService){

        this.notifier = notifierService;
    }
    ngOnInit(): void {
        if (this.produtoUpdate) {
            this.action = 'Atualizar produto';
            this.produto = this.produtoUpdate;

        } else {
            this.action = 'Cadastrar produto';
            this.produto.id = null;
            this.produto.descricao = '';
            this.produto.codProduto = '';
            this.produto.preco = null;
        }

        this.formBuild();
    }

    public formBuild(){
        this.form = this.fb.group({
            id: [this.produto.id],
            descricao: [this.produto.descricao, Validators.required],
            codProduto: [this.produto.codProduto, Validators.required],
            preco: [this.produto.preco, Validators.required]
        });
    }

    public onSubmit(){
        if (this.produtoUpdate) {
            this.produtoService.update(this.produto).subscribe(res => {
                this.notifier.notify( TypeMessages.sucess, Messages.productUpdateSucess );
                this.disableFormProduct.emit(true);
            }, err => {
                this.notifier.notify( TypeMessages.error, Messages.productUpdateFail );
                this.disableFormProduct.emit(true);
            });

        } else {
            this.produtoService.save(this.fornecedorId, this.produto).subscribe(res => {
                this.notifier.notify( TypeMessages.sucess, Messages.productRegisterSucess );
                this.disableFormProduct.emit(true);
            }, err => {
                this.notifier.notify( TypeMessages.error, Messages.productRegisterFail );
                this.disableFormProduct.emit(true);
            });

        }

    }
}
