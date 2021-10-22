import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { getData, state$ } from '@app/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-app';
  subscription!: Subscription;
  listener!: () => void;

  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    getData('/data').then((data: any) => {
      console.log('angular ', data);
    });
    this.subscription = state$.subscribe((data: any) => {
      console.log('angular ', data);
    });
    this.listener = this.renderer.listen(
      'window',
      'test',
      ({ detail }: CustomEvent) => {
        console.log('angular ', detail);
      }
    );
    console.log('angular storage ', sessionStorage.getItem('shared'));
    localStorage.setItem('shared', 'Angular data');
  }
  ngOnDestroy(): void {
    state$.next({ name: 'Angular data' });
    this.subscription.unsubscribe();
    this.listener();
  }
}
