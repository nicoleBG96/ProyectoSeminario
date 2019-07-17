import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule} from '@angular/material/card';

@NgModule ({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatMenuModule, 
        MatCardModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule, 
        MatIconModule,
        MatMenuModule, 
        MatCardModule
    ]
})
export class MaterialModule { }