import { Component, Input } from "@angular/core";

@Component({
    selector: 'mc-error-message',
    styleUrls: ['./errorMessage.component.scss'],
    template: '<div>{{messageProps}}</div>'
})
export class ErrorMessageComponent {
    @Input('message') messageProps: string = 'Something went wrong...'
}