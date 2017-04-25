import {NgModule}from "@angular/core";
import {BrowserModule}from "@angular/platform-browser"; //get support from browser
import {AppComponent}from "./app.component" //all the components must be declared
import {HomeComponent}from "./home.component"
import {AboutComponent}from "./about.component"
import {ProductModule}from "./product/product.module"
import {routingModule}from "./app.routing";
import * as config from "./app.config"

@NgModule({
    imports:[
        BrowserModule,
        ProductModule,
        routingModule
    ],
    declarations:[
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[{
provide:"apiEndPoint",
useValue:config.API_END_POINT
    }
    ]

})
export class AppModule{

}