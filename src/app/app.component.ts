import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  storedPosts: Post[] = [
  ];

  stepSelected = 1;

  onPostAdded(post) {
    this.storedPosts.push(post);
    console.log('Hello Dilso');
  }

  onStepOne() {
    this.stepSelected = 0;
  }

  onStepTwo() {
    this.stepSelected = 1;
  }
}
