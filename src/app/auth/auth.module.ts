import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [{ 
    path: 'register',
    component: RegisterComponent

}]

@NgModule({
    imports: [CommonModule],
    declarations: [RegisterComponent]
})
export class AuthModule {

}