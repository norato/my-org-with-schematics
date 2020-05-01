import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const fakeObservable = of([1, 2, 3]);

@Component({
  selector: 'my-org-sc-app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss']
})
export class LolComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject();
  stream$ = fakeObservable;
  constructor() {}

  ngOnInit() {
    this.stream$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
