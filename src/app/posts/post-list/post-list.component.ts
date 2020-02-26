import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {title: 'First Post', content: 'This is post 1'},
    {title: 'Second Post', content: 'This is post 2'},
    {title: 'Third Post', content: 'This is post 3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
