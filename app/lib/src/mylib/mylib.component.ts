import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mylib',
    moduleId: module.id,
	templateUrl: 'mylib.component.html',
	styleUrls: ['mylib.component.css']
})

export class MylibComponent implements OnInit {

	constructor() {
		console.log('mylib component')
	 }

	ngOnInit() { }
}
