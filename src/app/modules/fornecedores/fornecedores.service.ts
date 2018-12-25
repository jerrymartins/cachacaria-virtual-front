import {Injectable, OnInit} from '@angular/core';
import {
  FornecedorControllerService,
  FornecedorDTO,
  PageFornecedorDTO,
  ResponseFornecedorDTO,
} from "../../api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FornecedoresService implements OnInit{

  constructor(
    private fornecedorController: FornecedorControllerService) { }

  ngOnInit(): void {

  }

  public getById(id: number): Observable<ResponseFornecedorDTO>{
    return this.fornecedorController.findByIdUsingGET(id);
  }

  public getAll(page: number, sort: string, dir: string): Observable<PageFornecedorDTO>{
    return this.fornecedorController.findAllUsingGET(page, sort, dir);
  }

  public deleteById(id: number){
    return this.fornecedorController.deleteByIdUsingDELETE(id);
  }

  public save(fornecedor: FornecedorDTO): Observable<ResponseFornecedorDTO>{
    return this.fornecedorController.saveUsingPOST(fornecedor);
  }

  public update(fornecedor: FornecedorDTO): Observable<ResponseFornecedorDTO>{
    return this.fornecedorController.updateUsingPUT(fornecedor);
  }

}
