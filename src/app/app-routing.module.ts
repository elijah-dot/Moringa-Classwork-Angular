import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { NotFoundComponent } from './presentation/not-found/not-found.component'; //* 1
import { AboutComponent } from './Routing/about/about.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StudentsComponent } from './basic-routing/students/students.component';
import { StudentListComponent } from './basic-routing/student-list/student-list.component';
import { StudentDetailComponent } from './basic-routing/student-detail/student-detail.component';
import { TechnicalMentorsComponent } from './basic-routing/technical-mentors/technical-mentors.component';
import { MainBankComponentComponent } from './project1/bankingng/main-bank-component/main-bank-component.component';
const routes: Routes = [
  { path: 'goals', component: GoalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'goals/:id', component: GoalDetailComponent }, //4 adding parameters
  { path: 'students', component: StudentsComponent },
  
  
  { path: 'technical-mentors', component: TechnicalMentorsComponent },
  {path:"main-bank-component", component:MainBankComponentComponent},
  { path: '', redirectTo: '/goals', pathMatch: 'full' }, // 3
  { path: '**', pathMatch: 'full', component: NotFoundComponent }, //*wildcards 2
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents =[GoalComponent,AboutComponent,GoalDetailComponent,StudentsComponent,TechnicalMentorsComponent,NotFoundComponent,MainBankComponentComponent,StudentListComponent,StudentDetailComponent]
