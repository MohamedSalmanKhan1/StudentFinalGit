import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/student';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService
      .createStudent(this.student).subscribe(data => {
        console.log(data)
        this.student = new Student();
        this.gotoList();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
}

