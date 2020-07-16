import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../mainState';
import { Observable } from 'rxjs';
import { selectNetwork } from '../platform.selectors';
import { actionNetworkFetch } from '../platform.actions';
import { Network } from '../network.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformComponent {
  network$: Observable<Network>;

  constructor(public store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit() {
    let projectId = this.route.snapshot.paramMap.get('projectId');
    this.network$ = this.store.pipe(select(selectNetwork));
    this.store.dispatch(actionNetworkFetch({ projectId }));
  }
}
