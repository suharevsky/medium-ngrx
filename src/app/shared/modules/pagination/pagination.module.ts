import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UtilsService } from "../../services/utils.service";
import { PaginationComponent } from "./components/pagination/pagination.components";

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [PaginationComponent],
    declarations: [PaginationComponent],
    providers: [UtilsService]
})
export class PaginationModule {}