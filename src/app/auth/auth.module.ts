import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { BackendErrorsMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { BackendErrorMessagesComponent } from "../shared/modules/components/backendErrorMessages.component";

import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effect";
import { reducers } from "./store/reducers";

const routes: Routes = [{ 
    path: 'register',
    component: RegisterComponent
 
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule, 
        StoreModule.forFeature('auth', reducers), 
        EffectsModule.forFeature([RegisterEffect]),
        BackendErrorsMessagesModule
    ],
    declarations: [RegisterComponent],
    providers: [AuthService]
})
export class AuthModule {

}