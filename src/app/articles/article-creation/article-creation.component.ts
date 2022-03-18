import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent {

  @Output() addRequest = new EventEmitter<Article>();
  @Output() cancelRequest = new EventEmitter();
  article: Article;

  constructor() {
    this.article = {
      description: '',
      name: '',
      identifier: '',
      identifierType: 'custom'
    };
  }

  saveArticle() {
    this.addRequest.emit(this.article);
  }

  cancel() {
    this.cancelRequest.emit();
  }
}
