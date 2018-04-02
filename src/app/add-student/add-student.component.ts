import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentObj: any;
  confirmationSting:string="New Student has been added";
  isAdded:boolean=false;

  constructor(private http: Http) { }
  ngOnInit() { }

  addNewStudent(student,event:Event) {
    
    event.preventDefault();
    this.studentObj = {

      "name": student.name,
      "age": student.age,
      "class": student.class,
      "subject": [
        { "java": student.java, "angular": student.angular }
      ]
    }
    this.http.post("http://localhost:5555/Student/", this.studentObj).subscribe((res: Response) => {
      this.isAdded = true;
    })
  }

}
