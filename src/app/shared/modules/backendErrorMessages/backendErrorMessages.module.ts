import { CommonModule } from "@angular/common";
import { Input, NgModule, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "../../types/backendErrors.interface";
import { BackendErrorMessagesComponent } from "../components/backendErrorMessages.component";

@NgModule({
    imports: [CommonModule],
    declarations: [BackendErrorMessagesComponent],
    exports: [BackendErrorMessagesComponent]
})

export class BackendErrorsMessagesModule {
}