import { HttpClientModule } from '@angular/common/http';

import { GoalService } from './goal-service/goal.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './intro to angular/elijah/my-component/my-component.component';
import { ElijahComponent } from './intro to angular/elijah/elijah.component';
import { TheSecondComponentComponent } from './intro to angular/elijah/the-second-component/the-second-component.component';
import { InterpolationComponent } from './basic/data-binding/intepolation/interpolation.component';

import { AboutComponent } from './Routing/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './presentation/not-found/not-found.component';
import { Routes } from '@angular/router';
import { EventBindingComponent } from './basic/events/event-binding/event-binding.component';
import { MainBankComponentComponent } from './project1/bankingng/main-bank-component/main-bank-component.component';
import { NewAccountComponentComponent } from './project1/bankingng/new-account-component/new-account-component.component';
import { StudentsComponent } from './basic-routing/students/students.component';
import { TechnicalMentorsComponent } from './basic-routing/technical-mentors/technical-mentors.component';
import { DisplayComponent } from './project1/bankingng/display/display.component';
import { StudentListComponent } from './basic-routing/student-list/student-list.component';
import { StudentDetailComponent } from './basic-routing/student-detail/student-detail.component';
import { UserComponent } from './httpclient/user/user.component';
import { ProfileComponent } from './httpclient/profile/profile.component';

const routes: Routes = [{ path: '**', component: GoalComponent }];
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    MyComponentComponent,
    ElijahComponent,
    TheSecondComponentComponent,
    InterpolationComponent,
  
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    EventBindingComponent,
    MainBankComponentComponent,
    NewAccountComponentComponent,
    StudentsComponent,
    TechnicalMentorsComponent,
    DisplayComponent,
    StudentListComponent,
    StudentDetailComponent,
    UserComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [GoalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
