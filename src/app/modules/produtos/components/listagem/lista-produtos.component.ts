import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageProdutoDTO, ProdutoDTO} from "../../../../api";
import {FornecedoresService} from "../../../fornecedores/fornecedores.service";
import {ProdutosService} from "../../produtos.service";
import {PageRequest} from "../../../../utils/page-request";
import {NotifierService} from "angular-notifier";
import {TypeMessages} from "../../../../utils/TypeMessages";
import {Messages} from "../../../../utils/Messages";

@Component({
  selector: 'lista-produtos-page',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})

export class ListaProdutosComponent implements OnInit{
  @Input() idFornecedor: number;
  @Input() ItemsPerPage: number;
  @Output() updateList = new EventEmitter();
  @Output() updateTotalItens = new EventEmitter();
  @Output() updateProdutoEvent = new EventEmitter();

  public produtos: PageProdutoDTO;
  public pageRequest: PageRequest;
  private readonly notifier: NotifierService;

  private admin: boolean;

  constructor(
    private produtoService: ProdutosService,
    notifierService: NotifierService)
  {
    this.pageRequest = new PageRequest(0,'id', 'DESC', 0, 0);
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    console.log(this.idFornecedor)
    if (!this.idFornecedor) {
      this.getAllPaginated();
      this.admin = false;
    } else {
      this.findByIdFornecedor(this.idFornecedor, this.pageRequest);
      this.admin = true;
    }
  }

  public deleteById(id: number){
    this.produtoService.deleteById(id).subscribe(res => {
      this.findByIdFornecedor(this.idFornecedor, this.pageRequest);
      this.notifier.notify( TypeMessages.sucess, Messages.productDeleteSucess );
      this.updateTotalItens.emit(true);
    }, err => {
      console.log(err)
      this.notifier.notify( TypeMessages.sucess, Messages.productDeleteFail );
    });
  }

  public updateProduto(produto: ProdutoDTO){
    this.updateProdutoEvent.emit(produto);
  }

  public getAllPaginated(){
    this.produtoService.findAll(this.pageRequest).subscribe(produtos => {
      this.produtos = produtos;
      this.pageRequest.size = produtos.size;
      this.pageRequest.totalElements = produtos.totalElements;

    }, err => console.log(err));
  }

  public findByIdFornecedor(idFornecedor: number, pageRequest: PageRequest){
    this.produtoService.findByIdForncedor(idFornecedor, this.pageRequest).subscribe( produtos => {
      this.produtos = produtos;
      this.pageRequest.size = produtos.size;
      this.pageRequest.totalElements = produtos.totalElements;
    }, err => console.log(err));
  }

  public pageChanged(page: number){
    this.pageRequest.page = page;
    if (!this.idFornecedor) {
      this.getAllPaginated();
      this.admin = false;
    } else {
      this.findByIdFornecedor(this.idFornecedor, this.pageRequest);
      this.admin = true;
    }
  }
}
