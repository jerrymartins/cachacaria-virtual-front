import {Component, Input, OnInit} from '@angular/core';
import {FornecedorDTO} from "../../../../api";

@Component({
    selector: 'perfil-fornecedores-page',
    templateUrl: './perfil-fornecedores.component.html',
    styleUrls: ['./perfil-fornecedores.component.scss']
})

export class PerfilFornecedoresComponent implements OnInit{
    @Input() fornecedorProfile: FornecedorDTO;

    public fornecedorId: number;

    constructor(){

    }

    ngOnInit(): void {
        this.fornecedorId = this.fornecedorProfile.id;
    }

}
