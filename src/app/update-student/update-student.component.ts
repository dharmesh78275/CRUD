import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import {StudentService} from '../service/student.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

      data:any;
      
 
  private header=new Headers({'Content-Type':'application/json'});

  constructor(private route: ActivatedRoute,private http:Http) {

    this.route.queryParams.subscribe(params => {
      this.data = params;
  });
   }

  ngOnInit() {
  
    }

    updateStudent(students){
      let student = {
        "id": this.data.id,
        "name":  students.name,
        "age":  students.age,
        "class":  students.class,
        "subject": [
          {
            "java":  students.java,
            "angular":  students.angular
          }
        ]
      }
    console.log(student)
      const url = `${"http://localhost:5555/Student"}/${this.data.id}`;
      this.http.put(url,JSON.stringify(student),{headers:this.header}).toPromise()
      .then( () =>{
        
      })
    }
  
  }


