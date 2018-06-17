import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MylibComponent } from './mylib/mylib.component';

@NgModule({
	imports: [],
	exports: [MylibComponent],
	declarations: [MylibComponent],
	providers: [],
	schemas: [NO_ERRORS_SCHEMA]
})
export class MyLibModule { }
