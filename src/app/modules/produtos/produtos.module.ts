import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import {CadastroProdutosComponent} from "./components/cadastro/cadastro-produtos.component";
import {ListaProdutosComponent} from "./components/listagem/lista-produtos.component";

@NgModule({
    declarations: [
        CadastroProdutosComponent,
        ListaProdutosComponent
    ],
    imports: [
        CommonModule,
        ProdutosRoutingModule
    ],
    providers: []
})

export class ProdutosModule {}
