import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {ApiModule} from "./api";
import {HttpClientModule} from "@angular/common/http";
import {ListaFornecedoresComponent} from "./modules/fornecedores/components/listagem/lista-fornecedores.component";
import {CadastroFornecedoresComponent} from "./modules/fornecedores/components/cadastro/cadastro-fornecedores.component";
import {ListaProdutosComponent} from "./modules/produtos/components/listagem/lista-produtos.component";
import {CadastroProdutosComponent} from "./modules/produtos/components/cadastro/cadastro-produtos.component";

@NgModule({
    declarations: [
        AppComponent,
        ListaFornecedoresComponent,
        CadastroFornecedoresComponent,
        ListaProdutosComponent,
        CadastroProdutosComponent,
        NavbarComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ApiModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
