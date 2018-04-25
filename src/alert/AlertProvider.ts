import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import 'bootstrap/dist/js/bootstrap';
let bootbox = require('bootbox');

export interface AlertConfig {
  title?: string;
  callback?: any;
  size?: string;
  message?: string;
  value?: string;
}

@Injectable()
export class AlertProvider {

  constructor(private translate: TranslateService) {

  }

  alert(config: AlertConfig) {
    bootbox.alert({
      size: config.size || 'small',
      title: config.title,
      message: config.message,
      callback: config.callback
    })
  }

  confirm(config: AlertConfig) {
    bootbox.confirm({
      size: config.size || 'small',
      message: config.message,
      callback: config.callback,
      buttons: {
        confirm: {
          label: this.translate.instant('OK'),
          className: 'btn-primary'
        },
        cancel: {
          label: this.translate.instant('GLOBAL.CANCEL'),
          className: 'btn-default'
        }
      },
    });
  }

  prompt(config: AlertConfig) {
    bootbox.prompt({
      size: config.size || 'small',
      title: config.title,
      value: config.value,
      callback: config.callback,
      buttons: {
        confirm: {
          label: this.translate.instant('OK'),
          className: 'btn-primary'
        },
        cancel: {
          label: this.translate.instant('GLOBAL.CANCEL'),
          className: 'btn-default'
        }
      }
    });
  }
}
