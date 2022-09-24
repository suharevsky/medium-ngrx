import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { loginAction } from "../../store/actions/login.action";
import { isSubmittedSelector, validationErrorsSelector } from "../../store/selectors";
import { LoginRequestInterface } from "../../types/loginRequest.interface";

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form: FormGroup
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;
    
    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittedSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    initializeForm(): void {
        this.form = this.fb.group({
            email: '',
            password: '',
        }) 
    }

    onSubmit() {
        const request: LoginRequestInterface = {
            user: this.form.value,
        }
        this.store.dispatch(loginAction({request}));
    }
}