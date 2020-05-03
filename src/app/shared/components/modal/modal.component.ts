import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public currentComponent$ = this.modalService.currentComponent$;
  public isOpen$ = this.modalService.isOpen$;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  close() {
    this.modalService.closeModal();
  }

  handleClickInner(event: MouseEvent) {
    event.stopPropagation();
  }
}
