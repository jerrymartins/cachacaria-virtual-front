import {Component, Input, OnInit} from '@angular/core';
import {ProdutoDTO} from "../../../../api";

@Component({
    selector: 'lista-produtos-page',
    templateUrl: './lista-produtos.component.html',
    styleUrls: ['./lista-produtos.component.scss']
})

export class ListaProdutosComponent implements OnInit{
    @Input() produtos: Array<ProdutoDTO>;
    public p: number;


    ngOnInit(): void {
        console.log(this.produtos)
    }




}
