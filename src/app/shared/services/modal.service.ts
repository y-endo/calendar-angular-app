import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  _currentComponent$ = new Subject<any>();
  _isOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  get currentComponent$() {
    return this._currentComponent$.asObservable();
  }

  get isOpen$() {
    return this._isOpen$.asObservable();
  }

  setModal(component) {
    this._currentComponent$.next(component);
  }

  openModal() {
    this._isOpen$.next(true);
  }

  closeModal() {
    this._isOpen$.next(false);
  }
}
