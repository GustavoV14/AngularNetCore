import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LocalComponent } from './Local.component';
import { TaskComponent } from 'src/components/task/task.component';
import { TaskFormComponent } from 'src/components/task-form/task-form.component';
import { TasksListComponent } from 'src/components/tasks-list/tasks-list.component';
import { TaskService } from 'src/services/task.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LocalComponent,
    TaskComponent,
    TaskFormComponent,
    TasksListComponent
  ],
  providers:[TaskService],
  exports:[LocalComponent]
})
export class LocalModule { }
