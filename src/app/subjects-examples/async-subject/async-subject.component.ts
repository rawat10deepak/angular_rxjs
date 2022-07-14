import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent implements OnInit {
  mySubject = new AsyncSubject<number>(); // both emit and subscribe the value

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
    this.mySubject.complete(); // emit only latest to old or new subscriber only uopn completion
  }
}
