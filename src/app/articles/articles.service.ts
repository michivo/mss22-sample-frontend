import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Article } from './article';
import { NonEmptyResponse } from './../utils/non-empty.response';
import { getErrorMessage } from './../utils/http-error-response';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private url: string;

  constructor(private http: HttpClient, private logger: NGXLogger) {
    this.url = 'https://mss-sample-service.oa.r.appspot.com/api/v1/articles';
  }

  getArticles(): Observable<NonEmptyResponse<Article[]>> {
    return this.http.get<Article[]>(this.url).pipe(
      map(response => {
        return new NonEmptyResponse<Article[]>(true, '', response);
      }),
      catchError((errorResp: HttpErrorResponse) => {
        const errorMessage = getErrorMessage(errorResp);
        return of(new NonEmptyResponse<Article[]>(false, errorMessage, undefined));
      }));
  }

  addArticle(article: Article): Observable<NonEmptyResponse<Article>> {
    this.logger.debug('Adding new article');
    this.logger.debug(article);
    return this.http.post<Article>(this.url, article).pipe(
      map(response => {
        return new NonEmptyResponse<Article>(true, '', response);
      }),
      catchError((errorResp: HttpErrorResponse) => {
        const errorMessage = getErrorMessage(errorResp);
        return of(new NonEmptyResponse<Article>(false, errorMessage, undefined));
      }),
    );
  }
}
