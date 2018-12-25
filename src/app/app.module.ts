import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {ApiModule} from "./api";
import {HttpClientModule} from "@angular/common/http";
import {FornecedoresComponent} from "./modules/fornecedores/fornecedores.component";
import {ListaFornecedoresComponent} from "./modules/fornecedores/components/listagem/lista-fornecedores.component";
import {CadastroFornecedoresComponent} from "./modules/fornecedores/components/cadastro/cadastro-fornecedores.component";
import {ProdutosComponent} from "./modules/produtos/produtos.component";
import {ListaProdutosComponent} from "./modules/produtos/components/listagem/lista-produtos.component";
import {CadastroProdutosComponent} from "./modules/produtos/components/cadastro/cadastro-produtos.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {NotifierModule} from "angular-notifier";
import {PerfilFornecedoresComponent} from "./modules/fornecedores/components/perfil/perfil-fornecedores.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FornecedoresComponent,
    PerfilFornecedoresComponent,
    ListaFornecedoresComponent,
    CadastroFornecedoresComponent,
    ProdutosComponent,
    ListaProdutosComponent,
    CadastroProdutosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
