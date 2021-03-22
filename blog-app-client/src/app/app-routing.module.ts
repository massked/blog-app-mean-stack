import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [{
  path: 'articles',
  component: ArticlesListComponent
}, {
  path: 'article/:id',
  component: ArticleDetailsComponent
}, {
  path: 'add-article',
  component: ArticleFormComponent
}, {
  path: 'edit-article/:id',
  component: ArticleFormComponent
}, {
  path: 'login',
  component: LoginFormComponent
}, {
  path: '',
  redirectTo: 'articles',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
