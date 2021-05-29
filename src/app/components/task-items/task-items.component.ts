import { Component, OnInit,Input } from '@angular/core';
import {Task} from '../../mockdata/Task';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  @Input() taskProp: Task = {} as Task;
  faTimesCircle = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
