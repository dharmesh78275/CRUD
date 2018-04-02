import { Component, OnInit } from '@angular/core';
import {StudentService} from '../service/student.service';
import {Http,Response,Headers} from '@angular/http';
import {Router, NavigationExtras} from "@angular/router";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student:any;
  id:number;
private header=new Headers({'Content-Type':'application/json'});

  constructor(private studentService:StudentService,private http:Http,private router: Router) { }

  ngOnInit() {
    this.fetchStudent();
  }

  fetchStudent(){
    this.studentService.getStudent().subscribe(res =>{
      this.student = res;
     })
  }

  deleteStudent = function(id){
    if(confirm("Are you sure?")){
      const url = `${"http://localhost:5555/Student"}/${id}`;
      return this.http.delete(url,{header:this.header}).toPromise()
      .then(() =>{
        this.fetchStudent();
      })
    }
  }

  updateStudent(student){
   
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id":student.id,
          "name": student.name,
          "age": student.age,
          "class": student.class,
          "java":student.subject[0].java,
          "angular":student.subject[0].angular,
      }
  };
  this.router.navigate(["updateStudent"], navigationExtras);
  }

}
