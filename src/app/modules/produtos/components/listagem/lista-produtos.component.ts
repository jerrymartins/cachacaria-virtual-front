import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProdutoDTO} from "../../../../api";
import {FornecedoresService} from "../../../fornecedores/fornecedores.service";
import {ProdutosService} from "../../produtos.service";

@Component({
    selector: 'lista-produtos-page',
    templateUrl: './lista-produtos.component.html',
    styleUrls: ['./lista-produtos.component.scss']
})

export class ListaProdutosComponent implements OnInit{
    @Input() produtos: Array<ProdutoDTO>;
    @Input() ItemsPerPage: number;

    @Output() updateList = new EventEmitter();

    public p: number;

    constructor(
      private produtoService: ProdutosService
    ){

    }

    ngOnInit(): void {
        console.log(this.produtos)
    }

    public deleteById(id: number){
        this.produtoService.deleteById(id).subscribe(res => {
            console.log(res)
            this.updateList.emit(true);
        }, err => {
            console.log(err)
        });
    }
}
