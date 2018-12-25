import {Injectable, OnInit} from '@angular/core';
import {PageProdutoDTO, ProdutoControllerService, ProdutoDTO, ResponseProdutoDTO} from "../../api";
import {Observable} from "rxjs";


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

  public findAll(): Observable<PageProdutoDTO>{
    return this.produtoController.findAllUsingGET1();
  }

  public findById(id: number): Observable<ResponseProdutoDTO>{
    return this.produtoController.findByIdUsingGET1(id);
  }

  public update(produto: ProdutoDTO): Observable<ResponseProdutoDTO>{
    return this.produtoController.updateUsingPUT1(produto);
  }

}
