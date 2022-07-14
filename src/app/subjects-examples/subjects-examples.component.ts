import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects-examples',
  templateUrl: './subjects-examples.component.html',
  styleUrls: ['./subjects-examples.component.scss'],
})
export class SubjectsExamplesComponent implements OnInit {
  mySubject = new Subject<number>(); // both emit and subscribe the value

  constructor() {}

  ngOnInit(): void {
    this.mySubject.subscribe((res) =>
      console.log('First Subscription ->' + res)
    );
    this.mySubject.next(1); // update value
    this.mySubject.next(2);
    this.mySubject.next(3);
    this.mySubject.subscribe(
      (res) => console.log('Second Subscription ->' + res) // will display the latest value
    );
    this.mySubject.next(4);
  }
}
