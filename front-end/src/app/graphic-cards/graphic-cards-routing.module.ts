import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphicCardsComponent } from './graphic-cards.component';
import { CommentsComponent } from './comments/comments.component';

const cardRoutes: Routes = [
  {
    path: 'cards',
    component: GraphicCardsComponent,
    children: [
      {
        path: ':id/comments',
        component: CommentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(cardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CardsRoutingModule { }