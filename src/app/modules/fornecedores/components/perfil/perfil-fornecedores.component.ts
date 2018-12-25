import {Component, Input, OnInit} from '@angular/core';
import {FornecedorDTO} from "../../../../api";
import {FornecedoresService} from "../../fornecedores.service";

@Component({
    selector: 'perfil-fornecedores-page',
    templateUrl: './perfil-fornecedores.component.html',
    styleUrls: ['./perfil-fornecedores.component.scss']
})

export class PerfilFornecedoresComponent implements OnInit{
    @Input() fornecedorProfile: FornecedorDTO;

    constructor(private fornecedorService: FornecedoresService){

    }

    ngOnInit(): void {
        console.log(this.fornecedorProfile)
    }

    public updateProfile(){
        console.log(this.fornecedorProfile)
        this.fornecedorService.getById(this.fornecedorProfile.id).subscribe( res => {
            this.fornecedorProfile = res.data;
        })
    }


}
