import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProdutosComponent } from './modules/produtos/components/listagem/lista-produtos.component';
import {ListaFornecedoresComponent} from "./modules/fornecedores/components/listagem/lista-fornecedores.component";

const appRoutes: Routes = [
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'fornecedores', component: ListaFornecedoresComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
