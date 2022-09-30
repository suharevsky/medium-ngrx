import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { parse, parseUrl, stringify } from "query-string";
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
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            (params: Params) => {
                this.currentPage = Number(params['page'] || '1');
                this.fetchFeed();
            })
    }

    initializeValues(): void {
        this.baseUrl = this.router.url.split('?')[0];
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
    }

    fetchFeed(): void {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = parseUrl(this.apiUrlProps);
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...parsedUrl.query
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }
}
