import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QserviceService {
  private data = [] as any;
  constructor() { }

  getQuestions(): any {
    return this.data;
  }

  addQuestion(obj: any) {
    this.data.push(obj);
  }
  
  getQuestion(index: any) {
    return this.data[index];
  }
  updateQuestion(index: any,obj: any){
    this.data[index]=obj;
  }
  
  deleteQuestion(id: any) {
    this.data.splice(id, 1);
  }
}
