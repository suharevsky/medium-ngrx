import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeedComponent } from "./components/globalFeed/feed.component";



@NgModule({
    imports: [CommonModule],
    declarations: [FeedComponent],
    exports: [FeedComponent]
})
export class FeedModule {}