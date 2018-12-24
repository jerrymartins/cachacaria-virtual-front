import {Injectable, OnInit} from '@angular/core';
import {FornecedorControllerService, FornecedorDTO, Pageable, PageFornecedorDTO, Sort} from "../../api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FornecedoresService implements OnInit{

  constructor(
    private fornecedorController: FornecedorControllerService) { }

  ngOnInit(): void {

  }

  public getById(id: number){
    this.fornecedorController.findByIdUsingGET(id).subscribe( res => {
      console.log(res.data)
    })
  }

  public getAll(page: number, sort: string, dir: string): Observable<PageFornecedorDTO>{
    return this.fornecedorController.findAllUsingGET(page, sort, dir);
  }

  public deleteById(id: number){
    return this.fornecedorController.deleteByIdUsingDELETE(id);
  }

}
