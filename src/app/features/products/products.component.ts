import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/core/services/servicio.service';
import { item } from 'src/app/core/models/models';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faEye = faEye;
  stock: item[] = [];
  constructor(private servicio: ServicioService) { }

  ngOnInit() {
    this.stock = this.servicio.getStock();
  }

  addProduct(id:number) {
    this.servicio.addProduct(this.stock[id]);
  }
}
