import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FornecedoresService} from "../../fornecedores.service";
import {PageRequest} from "../../../../utils/page-request";
import {FornecedorDTO, PageFornecedorDTO} from "../../../../api";
import {NotifierService} from "angular-notifier";
import {Messages} from "../../../../utils/Messages";
import {TypeMessages} from "../../../../utils/TypeMessages";

@Component({
    selector: 'lista-fornecedores-page',
    templateUrl: './lista-fornecedores.component.html',
    styleUrls: ['./lista-fornecedores.component.scss']
})

export class ListaFornecedoresComponent implements OnInit{

    @Output() fornecedorUpdate = new EventEmitter();

    private pageRequest: PageRequest;
    private fornecedores: PageFornecedorDTO;
    private readonly notifier: NotifierService;


    constructor(private fornecedorService: FornecedoresService,
                notifierService: NotifierService
    ){
        this.pageRequest = new PageRequest(0,'id', 'DESC', 0, 0);
        this.notifier = notifierService;
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

    public update(fornecedor: FornecedorDTO){

        this.fornecedorUpdate.emit(fornecedor);
        // this.fornecedorService.update(fornecedor).subscribe(res => {
        //     this.notifier.notify( TypeMessages.sucess, Messages.providerUpdatedSucess );
        //     this.getAllPaginated();
        // }, err => {
        //     this.notifier.notify( TypeMessages.error, Messages.providerUpdatedFail )
        // })

    }

}
