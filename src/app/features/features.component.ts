import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ServicioService } from '../core/services/servicio.service';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})

export class FeaturesComponent implements OnInit {
  faShoppingCart = faShoppingCart; //icono cart
  navBtnStatus: boolean = true; //estado del boton del navbar
  
  constructor(public servicio: ServicioService) { }

  ngOnInit() {
  }

  sides(id:string) {
    let sidenav = document.getElementById(id);
    if (id==="mySideNav"){
      if (sidenav?.style.width === "0px" || sidenav?.style.width === "") {
        sidenav.style.width = "250px";
      }
      else if (sidenav?.style.width === "250px") {
        sidenav.style.width = "0px";
      }
    }
    else if (id==="mySideCart") {
      if (sidenav?.style.width === "0px" || sidenav?.style.width === "") {
        sidenav.style.width = "300px";
      }
      else if (sidenav?.style.width === "300px") {
        sidenav.style.width = "0px";
      }
    }
    this.navBtnStatus = !this.navBtnStatus;
  }

  deleteProduct(id:number) {
      this.servicio.deleteProduct(id);
  }
}
