import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import {Form, NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  deletePost = '';
  @Output() postCreated =  new EventEmitter<Post>();

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public PostsService: PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {title: form.value.title, content: form.value.content, id: null};
    // this.postCreated.emit(post);

    this.PostsService.addPosts(form.value.title, form.value.content);

  }

  onDeletePost() {
    this.deletePost = 'Hello';
  }

}
