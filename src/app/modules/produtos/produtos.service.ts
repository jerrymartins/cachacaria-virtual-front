import {Injectable, OnInit} from '@angular/core';
import {ProdutoControllerService} from "../../api";
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

  public deleteById(id: number): Observable<Response>{
    return this.produtoController.deleteUsingDELETE(id);
  }
}
