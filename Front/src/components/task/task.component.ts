import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interface/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task! : Task;
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if(confirm('Quiere eliminar la Tarea?')) {
      this.taskService.deleteTask(task);
    }
  }

}
