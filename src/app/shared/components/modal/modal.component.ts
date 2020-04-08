import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  isOpen = false;
  currentComponent = null;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.currentComponent$.subscribe((component) => {
      this.currentComponent = component;
    });

    this.modalService.isOpen$.subscribe((value) => {
      this.isOpen = value;
    });
  }

  close() {
    this.modalService.closeModal();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
