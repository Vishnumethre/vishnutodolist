import { Component } from '@angular/core';
import { Todolist } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons=['DONE','UPDATE','PEND'];
  Pendiglist:any=[];
  title = 'vishnuTodolist';
  constructor(private todo : Todolist){}
  Todolists:any=this.todo.Todolist;
  flag=false;

  addTolist(f:any)
  {
    this.todo.Todolist.push(f);
  }
  remove(index:number)
  {
    this.Pendiglist.push(this.Todolists[index]);
    this.Todolists.splice(index,1);
  }
  enable()
  {
this.flag=true;
  }
  completed(index:number)
  {
    this.Todolists.splice(index,1);
  }
  deleted(index:number)
  {
    this.Pendiglist.splice(index,1);
  }
  
}
