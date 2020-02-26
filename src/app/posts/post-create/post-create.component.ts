import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPost = 'NO CONTENT';
  dynamicText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(postInput) {
    this.newPost = postInput.value + ' motherfucker.';
  }

  onAddPost2(postInput2) {
    this.dynamicText = '';
  }


}
