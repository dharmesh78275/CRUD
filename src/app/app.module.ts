import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import {StudentService} from './service/student.service';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const appRoutes:Routes =[
  {path:'' , component:StudentComponent},
  {path:'addStudent' , component:AddStudentComponent},
  {path:'updateStudent' , component:UpdateStudentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
