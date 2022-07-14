import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubscriptionComponent } from './rxjs-subscription.component';

describe('RxjsSubscriptionComponent', () => {
  let component: RxjsSubscriptionComponent;
  let fixture: ComponentFixture<RxjsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
