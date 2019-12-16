import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
