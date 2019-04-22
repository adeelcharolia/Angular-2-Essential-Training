import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';


@NgModule({
	imports: [ // To bring in other Angular Modules your Module will need.
		BrowserModule,
	], 
	declarations: [ // To make components, directive & pipes available to your module that don't from another module.
		AppComponent,
		MediaItemComponent
	], 
	bootstrap: [ // To let Angular know which component OR components will be the starting point for the Boostrap process. Entry point for App code.
		AppComponent
	] 
})
export class AppModule{}