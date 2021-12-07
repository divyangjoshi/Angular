import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { ListComponent } from './list/list.component';
// import { EditComponent } from './edit/edit.component';

const routes:Routes = [
{path:'questions/:type',component:QuestionsComponent},
{path:'questions/:type/:id',component:QuestionsComponent},
{path:'list',component:ListComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
