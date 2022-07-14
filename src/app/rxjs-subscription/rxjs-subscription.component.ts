import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-subscription',
  templateUrl: './rxjs-subscription.component.html',
  styleUrls: ['./rxjs-subscription.component.scss'],
})
export class RxjsSubscriptionComponent implements OnInit, OnDestroy {
  result: any;
  subscription: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.http
      .get('assets/friends.json')
      .subscribe((res) => (this.result = res));
  }
  // we have to manually unsubscribe
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
