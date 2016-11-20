import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { WareInputComponent } from "./record/components/ware/ware.input.component";
import { FormsModule } from "@angular/forms";
import { DeliveryFormComponent } from "./record/components/delivery-form/delivery.form";
@NgModule({
    imports:      [ BrowserModule,FormsModule ],
    declarations: [ AppComponent, WareInputComponent,DeliveryFormComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }