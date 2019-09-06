import { Component, OnInit } from "@angular/core";
import { Posts } from "./../posts";
import { GlobalStateService } from "../global-state.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  posts: Array<Posts> = [];
  blogTitle: string = "";
  blogMessage: string = "";
  blogNumber: number = +localStorage.getItem("posts");
  addPostOpen: boolean;

  // public get addPostOpen(): boolean {
  //  addPostOpen = !this.addPostOpen;
  //   return this.globalStateService.addPostOpen;
  // }

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit(): void {
    this.addPostOpen = this.globalStateService.addPostOpen;

    this.globalStateService.addPostOpenChanged.subscribe(
      (newValue: boolean) => {
        this.addPostOpen = newValue;
      }
    );
    if (!localStorage.posts) {
      localStorage.setItem("posts", "0");
    }
    if (localStorage.posts > 0) {
      this.posts = JSON.parse(localStorage.blogPosts);
    }
  }

  onCreatePost(e: Event) {
    e.preventDefault();
    this.posts = [
      ...this.posts,
      { id: this.blogNumber, title: this.blogTitle, message: this.blogMessage }
    ];
    this.blogNumber += 1;
    localStorage.setItem("posts", `${this.blogNumber}`);
    localStorage.setItem("blogPosts", JSON.stringify(this.posts));
    this.blogTitle = "";
    this.blogMessage = "";
  }
}
