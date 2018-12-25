import {Injectable, OnInit} from '@angular/core';
import {PageProdutoDTO, ProdutoControllerService, ProdutoDTO, ResponseProdutoDTO} from "../../api";
import {Observable} from "rxjs";
import {PageRequest} from "../../utils/page-request";


@Injectable({
  providedIn: 'root',
})
export class ProdutosService implements OnInit{

  constructor(
    private produtoController: ProdutoControllerService
  ) {

  }

  ngOnInit(): void {
  }

  public save(produto: ProdutoDTO): Observable<ResponseProdutoDTO>{
    return this.produtoController.saveUsingPOST1(produto);
  }

  public deleteById(id: number): Observable<Response>{
    return this.produtoController.deleteUsingDELETE(id);
  }

  public findAll(pageRequest: PageRequest): Observable<PageProdutoDTO>{
    return this.produtoController.findAllUsingGET1(pageRequest.page, pageRequest.order, pageRequest.dir);
  }

  public findById(id: number): Observable<ResponseProdutoDTO>{
    return this.produtoController.findByIdUsingGET1(id);
  }

  public findByIdForncedor(idFornecedor: number, pageRequest: PageRequest): Observable<PageProdutoDTO>{
    return this.produtoController.findAllByFornecedorUsingGET(idFornecedor, pageRequest.page, pageRequest.order, pageRequest.dir);
  }
  public countTotalItensByFornecedor(idFornecedor: number): Observable<number>{
    return this.produtoController.countByFornecedorUsingGET(idFornecedor);
  }

  public update(produto: ProdutoDTO): Observable<ResponseProdutoDTO>{
    return this.produtoController.updateUsingPUT1(produto);
  }

}
