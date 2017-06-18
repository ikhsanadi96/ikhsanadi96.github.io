var question= [["2x7=... ", "9", "12", "13", "14", 4],
               ["3x8=...", "25", "24", "21", "26", 2],
               ["12x2=...", "20",  "18", "24", "29", 3],
               ["16x1=...",  "16", "17", "15", "1", 1],
               ["7x18=...", "140", "137", "126", "136", 3],
               ["22x21=...", "440", "462", "446", "442", 2],
               ["3x14=...", "40", "37", "36", "42", 4],
               ["31x41=...", "1240", "1237", "1261", "1271", 4],
               ["23x12=...", "246", "276", "236", "242", 2],
               ["13x42=...", "540", "546", "536", "542", 2]
               ];


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
        	mainBody.innerHTML = "<h1>"+"Benar "+ score+" dari 10 soal"+"</h1>"+"<p>"+"Anda telah selesai mengerjakan soal quiz perkalian"+ "</p>"+"<p>"+"Terus belajar, agar semakin bisa dalam perkalian angka yang lebih besar"+ "</p>";

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
