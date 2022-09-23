import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { registerAction } from "../../store/actions/register.action";
import { isSubmittedSelector, validationErrorsSelector } from "../../store/selectors";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    isSubmitting$: Observable<boolean>;
    backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store) {

    }

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
            username: ['', Validators.required],
            email: '',
            password: '',
        }) 
    }

    onSubmit() {
        const request: RegisterRequestInterface = {
            user: this.form.value,
        }
        //@ts-ignore
        this.store.dispatch(registerAction({request}));
    }
}