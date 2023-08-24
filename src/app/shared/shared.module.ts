import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseStrPipe } from './reverse-str.pipe';
import { HighlightDirective } from './highlight.directive';
import { AuthGuard } from './auth.guard';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    HighlightDirective,
    ReverseStrPipe,
  ],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(DataService),
  ],
  exports: [HighlightDirective, ReverseStrPipe],
})
export class SharedModule { }
