var canvas ;
var statement1 , statement2 , statement3 , statement4 , statement5;
var answers = [];
var emails = [];
var Submit;
var email;
var screen;
var value;
var database;
var Email;
var  emailno;
var gameState;
function setup (){
  canvas = createCanvas(500,1200);
  database = firebase.database();
  statement1 = new Form(" 1) Do you like to help others ?",100,400,100,450);
  Submit = createButton('Submit');
  Submit.position(200,1000);
  email = new Buttons();
 // email.position(40,1000);
  statement2 = new Form("2) Do you want to vote us ? ",100,500,100,550);
  statement3 = new Form("3) Do you support blacklives matter ?",100,600,100,650);
  statement4 = new Form("4) Are you  a good citizen  ?",100, 700,100,750);
  statement5 = new Form("5) How much can you donate to help ?",100,800,100,850);
} 
function draw(){
    background("yellow");
    statement1.display();
    statement2.display();
    statement3.display();
    statement4.display();
    statement5.display();
    email.display();
    Submit.mousePressed(()=>{
      email.hide();
     // console.log(emails);
      //emails = email.data.value();
      statement1.hide();
      statement2.hide();
      statement3.hide();
      statement4.hide();
      statement5.hide();
      screen = 2;
      email.getState();
     
    })
    if(screen ===2 ){
       emails = value;
       email.update(emails);

     
    }
}
