import VanillaModal from 'vanilla-modal';
import {EventEmitter, Component, Output, Input, OnInit} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  inputs: ['visible', 'headline', 'height']
})
export class Modal implements OnInit {
  modal: any;
  _size: string = 'medium';
  height: string = null;
  _visible: boolean;
  _headline: string = '';

  @Input() target: string;

  @Input() set size(value: string) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();


  get visible(): boolean {
    return this._visible;
  }

  set visible(bool: boolean) {
    if (this.modal) {
      this._visible = bool;

      if (bool) {
        this.modal.open(`#${this.target}`);
        document.body.style.overflow = 'hidden';

      } else if (this.target) {
        this.onClose();
      }
    }
  }

  onClose() {
    document.body.style.overflow = 'auto';
    this.close.emit('42');
    this.modal.close();
  }

  get headline(): string {
    return this._headline;
  }

  set headline(headline: string) {
    this._headline = headline;
  }

  ngOnInit(): void {
    this.target = `${this.target}`;

    this.modal = new VanillaModal({
      page: '#app-container',
      clickOutside: false,
      onClose: () => {
        this.onClose();
      },
      onOpen: () => {
        this.open.emit('42');
      }
    });
  }
}
