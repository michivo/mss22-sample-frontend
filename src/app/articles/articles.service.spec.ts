import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NGXLogger } from 'ngx-logger';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { of } from 'rxjs';
import { asyncData } from '../helpers/async-observable-helpers';
import { Article } from './article';

import { ArticleService } from './articles.service';

describe('ArticleServiceService', () => {
  let service: ArticleService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [
        LoggerTestingModule
      ]
    });
    service = new ArticleService(httpClientSpy, TestBed.inject(NGXLogger));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get articles from the service url', (done: DoneFn) => {
    const expectedArticles: Article[] = [
      {
        description: 'Humpty Dumpty sat on a wall',
        identifier: '4294967296',
        identifierType: 'custom',
        name: 'Egg'
      }
    ];
    httpClientSpy.get.and.returnValue(of(expectedArticles));

    service.getArticles().subscribe({
      next: articles => {
        expect(expectedArticles).toEqual(articles.data!);
        done();
      },
      error: done.fail
    })
  });
});
