import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_CONFIG, HTTP_CONFIG_DETAILS } from './config';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_CONFIG,
    useValue: HTTP_CONFIG_DETAILS
  }],
  exports: []
})

export class ApiModule { }
