import { Component } from '@angular/core';

@Component({
	selector: 'mw-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']
	/*template: `
		<h1>My App</h1>
		<p>Keeping track of the media i want to watch.</p>
	`*/
	/*styles: [`
		h1{ color: #fff; }
		.description{
			font-style: italic;
			color: green;
		}
	`]*/
})
export class AppComponent{
	firstMediaItem = {
		id: 1,
		name: "Firebug",
		medium: "Series",
		category: "Science Fiction",
		year: 2010,
		watchedOn: 1294166565384,
		isFavorite: false
	};
}