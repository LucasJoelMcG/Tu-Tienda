import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { item } from '../models/models'
@Injectable({ providedIn: 'root' })
    
export class ServicioService {
    private cartSubject:BehaviorSubject<item[] | null> = new BehaviorSubject<item[] | null> ([]);
    total:number=0;
    cartQuantity: number = 0; 
    constructor() { }

    stock: item[] = [
        {
            id:0,
            nombre:'Classic Spring',
            valor:120.00,
            cantidad:1,
            src:'../../../assets/images/men-01.jpg'
        },  
        {
            id:1,
            nombre:'Summer New',
            valor:90.00,
            cantidad:1,
            src:'../../../assets/images/men-02.jpg'
        },  
        {
            id:2,
            nombre:'Love Nana',
            valor:150.00,
            cantidad:1,
            src:'../../../assets/images/men-03.jpg'
        },  
        {
            id:3,
            nombre:'New Green Jacket',
            valor:75.00,
            cantidad:1,
            src:'../../../assets/images/women-01.jpg'
        },  
        {
            id:4,
            nombre:'Classic Dress',
            valor:45.00,
            cantidad:1,
            src:'../../../assets/images/women-02.jpg'
        },  
        {
            id:5,
            nombre:'Spring Collection',
            valor:130.00,
            cantidad:1,
            src:'../../../assets/images/women-03.jpg'
        },  
        {
            id:6,
            nombre:'School Collection',
            valor:80.00,
            cantidad:1,
            src:'../../../assets/images/kid-01.jpg'
        },  
        {
            id:7,
            nombre:'Summer Cap',
            valor:12.00,
            cantidad:1,
            src:'../../../assets/images/kid-02.jpg'
        },  
        {
            id:8,
            nombre:'Classic Kid',
            valor:30.00,
            cantidad:1,
            src:'../../../assets/images/kid-03.jpg'
        }
    ];

    getStock() {
        return this.stock;
    }

    public get cart():item[] | null {
        return this.cartSubject.value;
    }

    addProduct(product:item) {
        let position = this.cart?.findIndex(element=>element===product);
        if (position!==undefined && position!==-1 && this.cart!=null){
            this.cart[position].cantidad=this.cart[position].cantidad+1;

        }
        else {
            this.cart?.push(product);
        }
        this.total=this.total+product.valor;
        this.cartQuantity=this.cartQuantity+1;
    }

    deleteProduct(id:number) {
        let position = this.cart?.findIndex(element=>element.id===id);
        if (position!==undefined && position!==-1) {
            if (this.cart !==null && this.cart[position].cantidad <= 1){
                this.cart?.splice(position,1);
            }
            else if (this.cart!==null) {
                this.cart[position].cantidad=this.cart[position].cantidad-1;
            }
            this.total=this.total-this.stock[id].valor;
            this.cartQuantity=this.cartQuantity-1;
        }
        
    }
}