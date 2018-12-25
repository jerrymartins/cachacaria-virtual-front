import {Component, Input, OnInit} from '@angular/core';
import {FornecedorDTO} from "../../../../api";
import {ProdutosService} from "../../../produtos/produtos.service";

@Component({
    selector: 'perfil-fornecedores-page',
    templateUrl: './perfil-fornecedores.component.html',
    styleUrls: ['./perfil-fornecedores.component.scss']
})

export class PerfilFornecedoresComponent implements OnInit{
    @Input() fornecedorProfile: FornecedorDTO;

    public totalItens: number;

    constructor(private produtoService: ProdutosService){

    }

    ngOnInit(): void {
        this.getTotalItens();
    }

    public getTotalItens(){
        this.produtoService.countTotalItensByFornecedor(this.fornecedorProfile.id).subscribe( res => this.totalItens = res);
        console.log('teste')
    }

}
