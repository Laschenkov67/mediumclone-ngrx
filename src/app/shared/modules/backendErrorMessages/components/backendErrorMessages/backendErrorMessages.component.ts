import { BackendErrorsInterface } from './../../../../types/backend-errors.interface';
import {Component, Input, OnInit} from '@angular/core'


@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.components.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(' ')
        return `${name} ${messages}`
      }
    )
  }
}
