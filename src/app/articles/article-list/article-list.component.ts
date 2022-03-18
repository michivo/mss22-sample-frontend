import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  articles: Article[];
  adding: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private articleService: ArticleService) {
    this.articles = [];
    this.adding = false;
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  loadArticles() {
    this.articleService.getArticles()
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        this.articles = resp.data!;
      });
  }

  addArticle() {
    this.adding = true;
  }

  saveArticle(article: Article) {
    this.adding = false;
    this.articleService.addArticle(article)
      .pipe(takeUntil(this.destroy$))
      .subscribe(resp => {
        this.articles.push(resp.data!);
      })
  }

  cancelAdding() {
    this.adding = false;
  }
}
