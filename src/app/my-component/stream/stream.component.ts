import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const fakeObservable = of([1, 2, 3]);

@Component({
  selector: 'my-org-sc-app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})

export class StreamComponent implements OnInit {
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
