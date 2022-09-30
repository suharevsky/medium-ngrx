import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { getFeedAction } from "../../store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "../../store/selectors";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
    @Input('apiUrl') apiUrlProps: string;

    queryParamsSubscription: Subscription;

    limit: number = environment.limit;
    baseUrl: string;
    currentPage: number;

    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    feed$: Observable<GetFeedResponseInterface | null>

    constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
        this.fetchData();
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            (params: Params) => {
                this.currentPage = Number(params['page'] || '1')
            })
    }

    initializeValues(): void {
        this.baseUrl = this.router.url.split('?')[0];
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
    }

    fetchData(): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }
}
