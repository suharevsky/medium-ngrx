import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./components/banner/errorMessage.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ErrorMessageComponent],
    exports: [ErrorMessageComponent]
})

export class ErrorMessageModule { }