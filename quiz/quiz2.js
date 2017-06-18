var question= [["15-7=... ", "10", "8", "12", "22", 2],
               ["13-8=...", "5", "10", "11", "7", 1],
               ["12-12=...", "10",  "1", "24", "0", 4],
               ["16-6=...",  "10", "14", "6", "1", 1],
               ["23-14=...", "10", "7", "6", "9", 4],
               ["446-322=...", "120", "127", "126", "124", 4],
               ["464-343=...", "110", "121", "126", "119", 2],
               ["143-27=...", "106", "117", "116", "119", 3],
               ["340-21=...", "310", "317", "316", "319", 4],
               ["132-60=...", "70", "72", "76", "79", 2]];


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
        	mainBody.innerHTML = "<h1>"+"Benar "+ score+" dari 10 soal"+"</h1>"+"<p>"+"Anda telah selesai mengerjakan soal quiz pengurangan"+ "</p>"+"<p>"+"Terus belajar, agar semakin bisa dalam pengurangan angka yang lebih besar"+ "</p>";

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
