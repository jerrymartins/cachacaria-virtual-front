import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaFornecedoresComponent} from "../fornecedores/components/listagem/lista-fornecedores.component";


const appRoutes: Routes = [
    // { path: '', component: ListaFornecedoresComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class ProdutosRoutingModule {}
