import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
            //@ts-ignore
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return registerSuccessAction({ currentUser });
                }),
                catchError(() => {
                        //@ts-ignore
                    return of(registerFailureAction())
                })
            );
        })
    ))
    constructor(private actions$: Actions, private authService: AuthService) {

    }
}