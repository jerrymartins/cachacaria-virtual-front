import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaFornecedoresComponent} from "./components/listagem/lista-fornecedores.component";
import {CadastroProdutosComponent} from "../produtos/components/cadastro/cadastro-produtos.component";

const appRoutes: Routes = [
    // { path: '', component: ListaFornecedoresComponent },
    // { path: 'cadastro', component: CadastroProdutosComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class FornecedoresRoutingModule {}
