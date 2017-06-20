var question= [["120+57=... ", "690", "167", "177", "187", 3],
               ["73+31=...", "105", "114", "104", "106", 3],
               ["102+123=...", "205",  "218", "225", "229", 3],
               ["167+64=...",  "231", "241", "221", "218", 1],
               ["203+14=...", "217", "343", "336", "216", 1],
               ["103+147=...", "250", "251", "260", "249", 1],
               ["270+140=...", "310", "320", "420", "410", 4],
               ["83+174=...", "237", "257", "247", "267", 2],
               ["29+94=...", "112", "113", "123", "133", 3],
               ["125+349=...", "464", "474", "473", "484", 2]];


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
          mainBody.innerHTML = "<h1>"+"Benar "+ score+" dari 10 soal"+"</h1>"+"<p>"+"Anda telah selesai mengerjakan soal quiz penjumlahan"+ "</p>"+"<p>"+"Terus belajar, agar semakin bisa dalam penjumlahan angka yang lebih besar"+ "</p>";

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
