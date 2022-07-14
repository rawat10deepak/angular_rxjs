import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-example',
  templateUrl: './async-example.component.html',
  styleUrls: ['./async-example.component.scss'],
})
export class AsyncExampleComponent implements OnInit {
  result: any;

  constructor(private http: HttpClient) {}
  // no need of unsubscribe for async pipe...Angular will take care
  ngOnInit(): void {
    this.result = this.http.get('assets/friends.json');
  }
}
