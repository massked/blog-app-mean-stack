import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Author, AuthorsService } from '../api/authors.service';
import { CategoriesService, Category } from '../api/categories.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  authors: Author[];
  categories: Category[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, 
    private AuthorsService: AuthorsService,
    private CategoryService: CategoriesService) {}

    ngOnInit() {
      this.AuthorsService.all$().subscribe(v => this.authors = v);
      this.CategoryService.all$().subscribe(v => this.categories = v);
    }

}
