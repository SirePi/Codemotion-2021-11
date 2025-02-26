import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Order } from './order';
import { ORDERS } from './data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [...ORDERS];
  src: Subject<Order[]> = new Subject<Order[]>();

  initialize() {
    this.src.next(this.orders);
  }

  getOrders(): Observable<Order[]> {
    return this.src;
  }

  addOrder(order: Order) {
    this.orders = [...this.orders, order];
    this.src.next(this.orders);
  }

  constructor() { }
}
