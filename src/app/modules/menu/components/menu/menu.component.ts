import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../menu.service";

@Component({
    selector: 'menu-page',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
    constructor(
        private menuService: MenuService
    ){

    }

    ngOnInit() {
        this.menuService.getFornecedor();
    }
}
