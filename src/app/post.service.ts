import { Injectable } from "@angular/core";
import { Posts } from "./posts";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  data = localStorage.getItem("blogPosts");

  constructor() {}

  getPosts(): Observable<Posts[]> {
    return of(JSON.parse(this.data));
  }
}
