import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nativescript-ngx-lib",
  moduleId: module.id,
  templateUrl: "nativescript-ngx-lib.component.html",
  styleUrls: ["nativescript-ngx-lib.component.css"]
})
export class NativeScriptNgxLibComponent implements OnInit {
  constructor() {
    console.log("nativescript-ngx-lib component");
  }

  ngOnInit() {}
}
