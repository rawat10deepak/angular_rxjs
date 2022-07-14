import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss'],
})
export class BehaviourSubjectComponent implements OnInit {
  mySubject = new BehaviorSubject<number>(1); // both emit and subscribe the value

  constructor() {}

  ngOnInit(): void {
    this.mySubject.subscribe((res) =>
      console.log('First Subscription ->' + res)
    );
    this.mySubject.next(2); // update value
    this.mySubject.next(3);
    this.mySubject.next(4);
    this.mySubject.subscribe(
      (res) => console.log('Second Subscription ->' + res) // will display from starting
    );
    this.mySubject.next(5);
    // this.mySubject.complete(); // emit only latest to old or new subscriber only uopn completion
  }
}
