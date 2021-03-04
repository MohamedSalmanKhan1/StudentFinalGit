import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentListComponent } from 'src/app/student-list/student-list.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id: any;
  student: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['students']);
  }
}