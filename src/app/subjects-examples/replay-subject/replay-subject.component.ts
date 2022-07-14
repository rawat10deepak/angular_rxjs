import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  mySubject = new ReplaySubject<number>(); // both emit and subscribe the value

  constructor() {}

  ngOnInit(): void {
    this.mySubject.subscribe((res) =>
      console.log('First Subscription ->' + res)
    );
    this.mySubject.next(1); // update value
    this.mySubject.next(2);
    this.mySubject.next(3);
    this.mySubject.subscribe(
      (res) => console.log('Second Subscription ->' + res) // will display from starting
    );
    this.mySubject.next(4);
  }
}
