import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  @Input() taskValue: any;
  list: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.taskValue != '') {
      this.list.push(this.taskValue);
    }
  }
  
  deleteTask(e:any) {
    
      e.target.parentElement.parentElement.remove();

  }

  checkedTask(e:any){
    e.target.parentElement.classList.toggle("text-decoration-line-through");
  }

  
}








  
