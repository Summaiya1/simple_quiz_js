var answer = document.getElementById("b");
answer.addEventListener("click",checkAndNext);
var score=0;
var first = document.getElementById("first");

var second = document.getElementById("second");

 function checkAndNext()
 {
     if (document.getElementById('o1').checked)
     {
         score++;
        
     }
     document.body.innerHTML ="";
     document.body.innerHTML= (`
     <section>
         <h1>Quiz</h1>
     </section>
     <div>
         <p>Which one is the colour of stawberries?</p>
     </div>
     <div>
     <form>
         <p><label><input name="answer1" type="radio" id="o4"/>blue</label></p>
         <p><label><input name="answer1" type="radio" id="o5" />pink</label></p>
         <p><label><input name="answer1" type="radio" id="o6" />yellow</label></p>
     
         <button value="true" type="submit" id="b1">NEXT</button>
     </form>
     </div>
  `)
  document.getElementById("b1").addEventListener("click",checkAndNext1)
 }

 function checkAndNext1()
 {
    if (document.getElementById('o5').checked)
    {
        score++;
    
    }
    document.body.innerHTML ="";
    document.body.innerHTML= (`
    <section>
        <h1>Quiz</h1>
    </section>
    <div>
        <p>Which one is the colour of banana?</p>
    </div>
    <div>
    <form>
        <p><label><input name="answer2" type="radio" id="o7"/>blue</label></p>
        <p><label><input name="answer2" type="radio" id="o8" />pink</label></p>
        <p><label><input name="answer2" type="radio" id="o9" />yellow</label></p>
    
        <button value="true" type="submit" id="b2">NEXT</button>
    </form>
    </div>
 `)
 document.getElementById("b2").addEventListener("click",checkAndSubmit)
 }

function checkAndSubmit()
{
    if (document.getElementById('o9').checked)
    {
        score++;
     
    }
    document.body.innerHTML ="";
    document.body.innerHTML= (`
    <section>
        <h1>Quiz , your score is ${score}</h1>
    </section>
   
 `)
}