import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TagListComponent } from "./components/tagList/tagList.component";
import { FeedService } from "./services/feed.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TagListComponent],
    exports: [TagListComponent],
    providers: [FeedService]
})
export class TagListModule { }