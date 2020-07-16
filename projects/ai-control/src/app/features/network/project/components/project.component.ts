import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { State } from '../../mainState';
import {
  actionProjectCreate,
  actionProjectDelete,
  actionProjectFetch
} from '../project.actions';
import { selectProjects } from '../project.selectors';
import { Project } from '../project.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectDialog } from './newProjectDialog';

@Component({
  selector: 'project-list',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'delete'];
  projects$: Observable<Project[]>;
  newProjectName;

  constructor(public store: Store<State>, public dialog: MatDialog) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.projects$ = this.store.pipe(select(selectProjects));
    this.store.dispatch(actionProjectFetch({}));
  }

  openDialog(): void {
    const dialogRef = this.dialog
      .open(NewProjectDialog, {
        width: '250px',
        data: { newProjectName: this.newProjectName }
      })
      .afterClosed()
      .subscribe(result => {
        this.newProjectName = result;
        if (result != undefined) {
          this.store.dispatch(actionProjectCreate({ name: result }));
        }
      });
  }

  deleteProject(id: string): void {
    this.store.dispatch(actionProjectDelete({ id }));
  }
}
