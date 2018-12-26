import {Component, Input, OnInit} from '@angular/core';
import {FornecedorDTO, ProdutoDTO} from "../../../../api";
import {ProdutosService} from "../../../produtos/produtos.service";

@Component({
    selector: 'perfil-fornecedores-page',
    templateUrl: './perfil-fornecedores.component.html',
    styleUrls: ['./perfil-fornecedores.component.scss']
})

export class PerfilFornecedoresComponent implements OnInit{
    @Input() fornecedorProfile: FornecedorDTO;

    public totalItens: number;
    public enableFormProductBoolean: boolean = false;
    public productUpdate: ProdutoDTO;

    constructor(private produtoService: ProdutosService){

    }

    ngOnInit(): void {
        this.getTotalItens();
    }

    public getTotalItens(){
        this.produtoService.countTotalItensByFornecedor(this.fornecedorProfile.id).subscribe( res => this.totalItens = res);
    }

    public enableFormProduct(productUpdate?: ProdutoDTO){
        this.productUpdate = productUpdate;
        this.enableFormProductBoolean = true;
    }

    public disableFormProduct(){
        this.enableFormProductBoolean = false;
    }



}
