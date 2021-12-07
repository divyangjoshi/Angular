import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QserviceService } from '../qservice.service';
import { Question } from './question.model';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // objque: any;
  type: any;
  id: any;
  hideAdd: any;
  hideUpdate: any;

  questionForm= this.fb.group({
    qdesc:['',Validators.required],
    opt:['',Validators.required],
  });
questionUser()
{
  console.log(this.questionForm.value)
}

get qdesc()
{
  return this.questionForm.get('qdesc');
}

get opt()
{
  return this.questionForm.get('opt');
}

  constructor(private que: QserviceService, private router: ActivatedRoute, private _router: Router,private fb:FormBuilder) {
    // console.log(this.router.snapshot.params['id']);

    this.type = this.router.snapshot.params['type'];
    if (this.type == 'Add') {
      this.hideAdd = false;
      this.hideUpdate = true;
    }
    else if (this.type == 'edit') {
      this.hideAdd = true;
      this.hideUpdate = false;
    }
    console.log(this.hideAdd);
    this.id = this.router.snapshot.params['id'];
    console.log(this.type);

    if (this.router.snapshot.params['id'])
      this.questionForm.controls.qdesc.setValue(que.getQuestion(this.router.snapshot.params['id']))
    else
      this.objque = new Question();
    //this.objque.option = [] as any;
    console.log(this.que);

    {
      if(this.questionForm.valid){console.log
      this.questionForm.reset();
      }
    }
  }
  // constructor(private que: QserviceService,private _router: Router) {
  //   this.objque = new Question();
  //   //this.objque.option = [] as any;
  // }

  ngOnInit(): void {
  }

  addOption() {

    let opt = { description: this.optionField, isvalid: false }
    this.objque.option.push(opt);
    this.optionField = '';
  }

  deleteOption(id: number) {
    let deleteOption = this.objque.option.splice(id, 1);
    console.log(deleteOption);
  }

  save() {
    this.que.addQuestion(this.objque);
    alert("Question added to list")
    this.objque = new Question();

  }
  update() {
    this.que.updateQuestion(this.id, this.objque);
    this._router.navigateByUrl('/list');
    alert("Question Updated Successfully")
  }

  Clear() {
    this.objque = new Question();
  }

}
