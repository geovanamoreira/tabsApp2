/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  page;
  perPage;
  support;
  total;
  totalPages;

  constructor(private api: ApiService) {
    this.buscarTodos();
  }

  buscarTodos(page= 1){
    this.api.buscarUsuarios(page).subscribe(usuarios => {
      console.log(usuarios);

      this.page = usuarios['page'];
      this.perPage = usuarios['perPage'];
      this.support = usuarios['support'];
      this.support = usuarios['support'];
      this.total = usuarios['total'];
      this.totalPages = usuarios['totalPages'];
    });
  }

}
