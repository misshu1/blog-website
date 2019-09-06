import { Injectable, EventEmitter } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GlobalStateService {
  public addPostOpenChanged: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  private addPostOpenValue: boolean = false;

  constructor() {}

  public get addPostOpen(): boolean {
    return this.addPostOpenValue;
  }

  public set addPostOpen(postOpen: boolean) {
    this.addPostOpenValue = postOpen;
    this.addPostOpenChanged.emit(postOpen);
  }
}
