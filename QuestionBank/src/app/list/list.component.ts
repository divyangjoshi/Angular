import { Component, OnInit } from '@angular/core';
import { QserviceService } from '../qservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = [] as any;
  objque: any;
  
  constructor(private que:QserviceService) {
    this.list = this.que.getQuestions();    
   }
   deleteOption(id: number) {
    this.que.deleteQuestion(id);
    
  }
  ngOnInit(): void {
  }  
}
