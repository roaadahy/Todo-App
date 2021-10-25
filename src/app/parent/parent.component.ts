import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TaskListComponent } from '../task-list/task-list.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  @ViewChild(InputComponent) inputComponent: any;
  @ViewChild(TaskListComponent) taskListComponent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
