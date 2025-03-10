import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/view-all-attendance/view-all-attendance.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'faculty-dashboard',
    component:FacultyDashboardComponent
  },
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'all-user',
  component:AllUsersComponent  },

{
  path:'edit-user/:username',
  component:EditUserComponent
},
  {
    path:'add-subject',
    component:AddSubjectComponent
  },
  {
    path:'all-subject',
    component:AllSubjectsComponent
  },{
    path:'edit-subject',
    component:EditSubjectComponent
  },{
    path:'view-all-attendace',
    component:ViewAllAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
