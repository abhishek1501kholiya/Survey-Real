class Form {

    constructor(question,questionpositionx , questionpositiony,answersx, answersy) {
    
      this.greeting = createElement('h1');
      this.instruction = createElement('h2');
      this.question = createElement('h2');
  
     this.input2 = createInput('Answer');
     this.input2x = answersx;
     this.input2y = answersy;
      this.answer = question;
      this.answerx = questionpositionx;
      this.answery = questionpositiony;
  }
  hide(){
    this.input2.hide();
    this.question.hide();
    
  }
  display(){
    this.greeting.html("This is a Survey");
    this.greeting.position(100,200);
    this.instruction.html("please answer the questions in either yes or no");
    this.instruction.position(10,300);
    this.question.html(this.answer);
    this.question.position(this.answerx , this.answery);
    this.input2.position(this.input2x,this.input2y);
    
  //  this.button3.mousePressed(()=>{
       
    //  this.input.hide();
     // email = this.input.value();
     // this.button1.hide();
     // this.button2.hide();
      //this.button3.hide();
    //})
  }
}
  