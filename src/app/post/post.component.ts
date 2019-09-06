import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Posts } from "../posts";
@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  posts: Posts[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
    // initialize data stuff
    // window.setInterval(() => {
    //   this.printPosts();
    // }, 1000);
  }

  // printPosts(): void {
  //   this.posts.forEach((post: Posts) => console.log(post.message));
  // }

  // ngAfterViewInit(): void {
  //   // initialize component data
  // }

  // ngOnDestroy(): void {}

  getPosts() {
    this.postService.getPosts().subscribe(posts => (this.posts = posts));
  }
}
