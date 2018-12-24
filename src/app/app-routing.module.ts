import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FornecedoresComponent} from "./modules/fornecedores/fornecedores.component";
import {ProdutosComponent} from "./modules/produtos/produtos.component";

const appRoutes: Routes = [
    { path: 'produtos', component: ProdutosComponent },
    { path: 'fornecedores', component: FornecedoresComponent }
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
