import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    ArticleFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
