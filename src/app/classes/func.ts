import { Observable } from "rxjs";

export class  func
{
    constructor() {  }

    confirmModal(message='Bu işlemi yapmak istediğinizden emin misiniz?')
    {
        return confirm(message);
    }
    questionMaker(item:any[]){

    var listQuestions:any[] = [] 
    var count = item.length
    for (let i = 0; i < count/4; i++) {  
      var len = item.filter(e => e.surveyQuestion == item[i].surveyQuestion).length
      listQuestions.push({ soru: item[i * len].surveyQuestion })
      
      for (let j = 0; j < 4; j++) {
        listQuestions.push({ cevap: item[i * 4 + j].answer, questionId: item[i * len + j].id,answerId:item[i * len + j].cevapId })

      }
    }
    return listQuestions
  }
}