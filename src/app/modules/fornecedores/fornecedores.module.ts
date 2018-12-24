import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedoresRoutingModule } from './fornecedores-routing.module';
import {ListaFornecedoresComponent} from "./components/listagem/lista-fornecedores.component";
import {CadastroFornecedoresComponent} from "./components/cadastro/cadastro-fornecedores.component";

@NgModule({
    declarations: [
        ListaFornecedoresComponent,
        CadastroFornecedoresComponent
    ],
    imports: [
        CommonModule,
        FornecedoresRoutingModule
    ],
    providers: []
})

export class FornecedoresModule {}
