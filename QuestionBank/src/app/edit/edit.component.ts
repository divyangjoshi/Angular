import { Component, OnInit } from '@angular/core';
import { QserviceService } from '../qservice.service';
import { Question } from '../questions/question.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  objque = new Question();

  constructor(private que: QserviceService, private router:ActivatedRoute,private _router: Router) {
    console.log(this.router.snapshot.params['id']);
    this.objque=que.getQuestion(this.router.snapshot.params['id'])
    
  }

  ngOnInit(): void {
  }

  addOption() {

    let opt = { description: '', isvalid: false }
    this.objque.option.push(opt);
    console.log(opt);
  }
  deleteOption(id: number) {
    let deleteOption = this.objque.option.splice(id, 1);
    console.log(deleteOption);
  }
  save() {
    this.que.updateQuestion(this.router.snapshot.params['id'],this.objque);
    this._router.navigateByUrl('/list');
console.log(this.que);
  }
  Clear(){
    this.objque = new Question();
   }
}
