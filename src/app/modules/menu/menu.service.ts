import {Injectable, OnInit} from '@angular/core';
import {FornecedorControllerService} from "../../api";

@Injectable({
    providedIn: 'root',
})
export class MenuService implements OnInit{

    constructor(
        private fornecedorController: FornecedorControllerService) { }

    ngOnInit(): void {
    }

    public getFornecedor(){
        this.fornecedorController.findByIdUsingGET(2).subscribe( res => {
            console.log(res.data)
        })
    }

}
