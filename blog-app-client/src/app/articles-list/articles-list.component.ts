import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  public title: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(v => this.title = this.generateTitle(v))
  }

  generateTitle(params: Params): string {
    if(params.order === 'createdAt') {
      return 'Newest Articles';
    }

    if(params.order === 'visits') {
      return 'Most visited Articles';
    }

    if(params.author_id) {
      return 'Articles by author'
    }

    if(params.category_id) {
      return 'Articles by category'
    }
    
    return 'Articles';
  }

}
