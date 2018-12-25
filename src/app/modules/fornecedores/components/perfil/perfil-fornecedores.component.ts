import {Component, Input, OnInit} from '@angular/core';
import {FornecedorDTO} from "../../../../api";

@Component({
    selector: 'perfil-fornecedores-page',
    templateUrl: './perfil-fornecedores.component.html',
    styleUrls: ['./perfil-fornecedores.component.scss']
})

export class PerfilFornecedoresComponent implements OnInit{
    @Input() fornecedorProfile: FornecedorDTO;

    ngOnInit(): void {
        console.log(this.fornecedorProfile)
    }


}
