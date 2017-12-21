import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CardsRoutingModule } from './graphic-cards-routing.module';
import { CardService } from './services/card.service';
import { PaginationComponent } from './pagination/pagination.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { GraphicCardsComponent } from './graphic-cards.component';
import { CardComponent } from './card/card.component';
import { ShowMoreComponent } from './show-more/show-more.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    CardsRoutingModule
  ],
  declarations: [
    PaginationComponent,
    PageSizeComponent,
    GraphicCardsComponent,
    CardComponent,
    ShowMoreComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent
  ],
  providers: [
    CardService
  ]
})
export class GraphicCardsModule { }
