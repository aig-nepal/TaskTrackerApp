import { Component, OnInit } from '@angular/core';
import { observable,of } from 'rxjs';
import {Task} from "../../mockdata/Task"
// import {TaskJsonData} from "../../mockdata/mock-task"; //(Method 1)

import {TaskService} from "../../services/task.service"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  //taskList : Task[] = TaskJsonData; //(Method 1)
  //===============================================

  taskList : Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
   // this.taskList = this.taskService.getTaskJsonList(); // method 2

    this.taskService.getTaskJsonList().subscribe((result)=>{this.taskList = result;});
  }

}
