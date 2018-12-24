import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {ApiModule} from "./api";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
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
