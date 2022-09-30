import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "./components/banner/loading.component";

@NgModule({
    imports: [CommonModule],
    declarations: [LoadingComponent],
    exports: [LoadingComponent]
})

export class LoadingModule { }