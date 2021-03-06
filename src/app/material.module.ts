// This page is to add whatever componenent you like to avoid a big fat APP with all material objects dumped in JQ

// This is here for 2 way binding: Two-way binding gives your app a way to share data between a component class and its template.
import { NgModule } from '@angular/core';

// An example of `hey angular, I just want the button api`
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports:[MatButtonModule, MatIconModule,MatInputModule,MatFormFieldModule],
    exports:[MatButtonModule, MatIconModule, MatInputModule,MatFormFieldModule]
})
export class MaterialModule {

}