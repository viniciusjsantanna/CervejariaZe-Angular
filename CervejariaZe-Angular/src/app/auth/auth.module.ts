import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers:[
        AuthService
    ]
})

export class AuthModule { }