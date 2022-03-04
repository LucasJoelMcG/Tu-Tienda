import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FeaturesRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    FeaturesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent
  ]
})
  
export class FeaturesModule { }
