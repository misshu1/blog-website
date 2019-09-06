import { Component, OnInit } from "@angular/core";
import { GlobalStateService } from "./global-state.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string = "Blog App";
  addPostOpen: boolean;

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit() {
    this.addPostOpen = this.globalStateService.addPostOpen;

    this.globalStateService.addPostOpenChanged.subscribe(
      (newValue: boolean) => {
        this.addPostOpen = newValue;
      }
    );
  }

  // getAddPostOpen() {
  //   this.globalStateService
  //     .getAddPostOpen()
  //     .subscribe(open => (this.addPostOpen = open));
  // }
}
