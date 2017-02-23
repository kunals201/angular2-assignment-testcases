import {Component, OnInit} from '@angular/core'
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {Task} from '../task'

@Component({
  moduleId:module.id,
  selector :'ShowTask',
  templateUrl: './showTask.component.html'
})

export class ShowTaskComponent implements OnInit {
  constructor(private router: Router,
              private service: AppService) {
  }

  newTask: Task[];

  ngOnInit() {
    this.service.getData().subscribe(data =>  {
      alert(JSON.stringify(data))
      this.newTask=data

    }, err => {
      alert(err)
    });
  }



  deleteByIndex(index: number) {
    this.service.remove(this.newTask[index]._id).subscribe((data:any)=>alert(JSON.stringify(data)))
  }


  editTask(index: number) {
    this.router.navigate(['CreateTask',this.newTask[index]._id])
  }

}
