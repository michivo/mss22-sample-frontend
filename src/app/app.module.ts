import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleCreationComponent } from './articles/article-creation/article-creation.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleCreationComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
