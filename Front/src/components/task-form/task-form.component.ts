import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  title!: string;
  description!: string;
  image!: any;
  imageBase64!: any
  constructor(public taskService: TaskService) {}

  ngOnInit() {}

  addTask = async(newTitle: any, newDescription: any, newImage:any) =>{
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      image: await this.getBase64(newImage.files[0]),
      hide: true,
    });
    newTitle.value = '';
    newDescription.value = '';
    newImage.value = '';
    return false;
  }

  getBase64(file:any){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
}
