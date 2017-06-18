var question= [["35:5=... ", "30", "5", "7", "40", 3],
               ["14:2=...", "5", "16", "12", "7", 4],
               ["12:12=...", "24",  "0", "1", "2", 3],
               ["16:4=...",  "2", "4", "20", "8", 2],
               ["28:14=...", "4", "3", "6", "2", 4],
               ["280:4=...", "74", "73", "70", "60", 3],
               ["144:2=...", "74", "73", "76", "72", 4],
               ["1228:4=...", "347", "307", "306", "424", 2],
               ["816:4=...", "204", "203", "24", "214", 1],
               ["3780:12=...", "314", "315", "316", "325", 2]];


var score = 0;
var quesNum = 0;

function displayQuiz(){

var quest = document.getElementById("question");
quest.innerHTML = question[quesNum][0];

  for(j=1; j<=4; j++){
     var opt = document.getElementById("choice"+j);
     opt.innerHTML = question[quesNum][j];

 }

}

(function () {
    displayQuiz();
})();

  function validat(item){
       
       if(item === "choice"+question[quesNum][5]){

       	score++;
       }

       if(item === "btn"+question[quesNum][5]){

       	score++;
       }

         if(quesNum === 9){
        	var mainBody = document.getElementById("quiz");
        	mainBody.innerHTML = "<h1>"+"Benar "+ score+" dari 10 soal"+"</h1>"+"<p>"+"Anda telah selesai mengerjakan soal quiz pembagian"+ "</p>"+"<p>"+"Terus belajar, agar semakin bisa dalam pembagian angka yang lebih besar"+ "</p>";

        }

        quesNum++;

        
     }

var theParent = document.getElementById("buttons");
theParent.addEventListener("click", listenMe, false);
 
function listenMe(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        validat(clickedItem);
    }
    e.stopPropagation();
    if(quesNum < 10){
    displayQuiz();}
}
