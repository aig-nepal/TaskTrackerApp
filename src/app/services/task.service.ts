import { Injectable } from '@angular/core';
import { Observable, observable,of } from 'rxjs';
import {Task} from "../mockdata/Task";
import {TaskJsonData} from "../mockdata/mock-task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTaskJsonList() : Observable<Task[]>
  {
    var result = of(TaskJsonData);
    return result;    
  }
}
