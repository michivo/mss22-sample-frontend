import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'tr[app-article-details]',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {

  @Input() article?:Article;

}
