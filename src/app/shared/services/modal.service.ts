import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  currentComponent = new Subject<any>();
  currentComponent$ = this.currentComponent.asObservable();
  isOpen = new Subject<boolean>();
  isOpen$ = this.isOpen.asObservable();

  constructor() {}

  setModal(component) {
    this.currentComponent.next(component);
  }

  openModal() {
    this.isOpen.next(true);
  }

  closeModal() {
    this.isOpen.next(false);
  }
}
