import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptNgxLibComponent } from "./nativescript-ngx-lib/nativescript-ngx-lib.component";

@NgModule({
  imports: [],
  exports: [NativeScriptNgxLibComponent],
  declarations: [NativeScriptNgxLibComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NativeScriptNgxLibModule {}
