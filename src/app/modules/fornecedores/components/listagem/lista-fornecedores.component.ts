import {Component, OnInit} from '@angular/core';
import {FornecedoresService} from "../../fornecedores.service";
import {PageRequest} from "../../../../utils/page-request";
import {PageFornecedorDTO} from "../../../../api";

@Component({
    selector: 'lista-fornecedores-page',
    templateUrl: './lista-fornecedores.component.html',
    styleUrls: ['./lista-fornecedores.component.scss']
})

export class ListaFornecedoresComponent implements OnInit{

    private pageRequest: PageRequest;
    private fornecedores: PageFornecedorDTO;


    constructor(private fornecedorService: FornecedoresService){
        this.pageRequest = new PageRequest(0,'id', 'DESC', 0, 0);
    }

    ngOnInit(): void {
        this.getAllPaginated();
    }

    public pageChanged(page: number){
        this.pageRequest.page = page - 1;
        this.getAllPaginated();
    }

    public getAllPaginated(){
        this.fornecedorService.getAll(this.pageRequest.page, this.pageRequest.order, this.pageRequest.dir).
        subscribe(fornecedores => {
            this.fornecedores = fornecedores;

            this.pageRequest.size = fornecedores.size;
            this.pageRequest.totalElements = fornecedores.totalElements;
        });
    }

    public deleteById(id: number){
        this.fornecedorService.deleteById(id).subscribe(res => {
            this.getAllPaginated()
        }, err => console.log(err));
    }


}
