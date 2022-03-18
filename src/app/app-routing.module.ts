import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './articles/article-list/article-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full' },
  { path: 'article-list', component: ArticleListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
