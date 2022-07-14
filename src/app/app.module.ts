import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsSubscriptionComponent } from './rxjs-subscription/rxjs-subscription.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncExampleComponent } from './async-example/async-example.component';
import { SubjectsExamplesComponent } from './subjects-examples/subjects-examples.component';
import { ReplaySubjectComponent } from './subjects-examples/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './subjects-examples/async-subject/async-subject.component';
import { BehaviourSubjectComponent } from './subjects-examples/behaviour-subject/behaviour-subject.component';

@NgModule({
  declarations: [AppComponent, RxjsSubscriptionComponent, AsyncExampleComponent, SubjectsExamplesComponent, ReplaySubjectComponent, AsyncSubjectComponent, BehaviourSubjectComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
