import {Component, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../post.model';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-history',
  templateUrl: './post-history.component.html',
  styleUrls: ['./post-history.component.css']
})
export class PostHistoryComponent implements OnInit, OnDestroy {
  posts: Post[] = [
  ];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }


}
