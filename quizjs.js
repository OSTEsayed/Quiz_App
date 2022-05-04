let quastions=["tot = 0 <br> for i in [5, 4, 3, 2, 1] :<br>&nbsp;&nbsp; tot = tot + 1<br>print(tot)",
"s=-1<br>for x in[9,41,12,3]<br>&nbsp;&nbsp;if x<s:<br>&nbsp;&nbsp;s=x<br>print(s)",
"'indefinite'loop:"]
let correct =[1,0,2]
let choice1=["0","-1","for"]
let choice2=["5","9","indef"]
let choice3=["10","42","while"]
let choice4=["15","3","def"]
let NT_qastion=quastions.length;
let N_qastion=0
let time_left=90
let clock_M=Math.floor(time_left/60);
let clock_S=time_left%60;

let bod=document.getElementsByTagName("body")[0];
let qas_lab=document.getElementsByClassName("Question")[0];
let cho1_lab=document.getElementsByClassName("ch1")[0];
let cho2_lab=document.getElementsByClassName("ch2")[0];
let cho3_lab=document.getElementsByClassName("ch3")[0];
let cho4_lab=document.getElementsByClassName("ch4")[0];
let next_lab=document.getElementsByClassName("next")[0];
let start_lab=document.getElementsByClassName("start")[0];
let timing_lab=document.getElementsByClassName("Timing")[0];
let clock_lab=document.getElementsByClassName("clock")[0];
let score_lab=document.getElementsByClassName("score")[0];

let ttime;
let cho=[cho1_lab,cho2_lab,cho3_lab,cho4_lab]
function timing(){
     if(time_left<0){
          clearInterval(ttime)
          time_left=90
          lose();
     }
     else{

          let transp=(time_left*100/90).toString()
          clock_M=Math.floor(time_left/60);
          clock_S=time_left%60;
          clock_lab.innerHTML=clock_M.toString()+":"+clock_S.toString();
          timing_lab.style.display="block";
          timing_lab.style.background="-moz-linear-gradient(0,rgba(0,0,0,.2) "+transp+"%,transparent 00%)";
          time_left=time_left-1;
     }
}
function starte(){

bod.classList="";
bod.style.backgroundColor="aliceblue";
     cho[0].disabled=false;
     cho[1].disabled=false;
     cho[2].disabled=false;
     cho[3].disabled=false;
     cho[0].style.backgroundColor="transparent";
     cho[1].style.backgroundColor="transparent";
     cho[2].style.backgroundColor="transparent";
     cho[3].style.backgroundColor="transparent";
   
     time_left=90
     N_qastion=0
     start_lab.style.display="none";
     qas_lab.innerHTML=quastions[N_qastion];
     cho[0].innerHTML=choice1[N_qastion]
     cho[1].innerHTML=choice2[N_qastion]
     cho[2].innerHTML=choice3[N_qastion]
     cho[3].innerHTML=choice4[N_qastion]
     cho[0].style.display="block";
     cho[1].style.display="block";
     cho[2].style.display="block";
     cho[3].style.display="block";
     timing()
     ttime=setInterval(timing,1000);
     score_lab.innerHTML=(N_qastion+1).toString()+"/"+(NT_qastion).toString()
     score_lab.style.display="block";
}

function choice(i){

     clearInterval(ttime)
     if(correct[N_qastion]!=i){
          console.log("wrong")
          cho[i].style.backgroundColor="lightcoral";
          cho[correct[N_qastion]].style.backgroundColor="lightgreen";
         
          bod.style.backgroundColor="lightcoral"
          lose();
     }
     else if(N_qastion+1==NT_qastion){
          win();
     }
     else{
          N_qastion=N_qastion+1;
          bod.style.backgroundColor="lightgreen"
          cho[i].style.backgroundColor="lighgreen";
          time_left=90  
          cho[0].style.display="none";
          cho[1].style.display="none";
          cho[2].style.display="none";
          cho[3].style.display="none";
          timing_lab.style.display="none";
          qas_lab.innerHTML="Good Job Champ.";
          next_lab.style.display="block";
     }
}
function next(){
     next_lab.style.display="none";
     time_left=90
     qas_lab.innerHTML=quastions[N_qastion];
     cho[0].innerHTML=choice1[N_qastion]
     cho[1].innerHTML=choice2[N_qastion]
     cho[2].innerHTML=choice3[N_qastion]
     cho[3].innerHTML=choice4[N_qastion]
     cho[0].style.display="block";
     cho[1].style.display="block";
     cho[2].style.display="block";
     cho[3].style.display="block";
     timing()
     ttime=setInterval(timing,1000);
     score_lab.innerHTML=(N_qastion+1).toString()+"/"+(NT_qastion).toString()
     score_lab.style.display="block";
}
function winback(){
bod.classList="Win";
}
function win(){
     winback()
     N_qastion=0;
     bod.style.backgroundColor="lightgreen"
     time_left=90  
     cho[0].style.display="none";
     cho[1].style.display="none";
     cho[2].style.display="none";
     cho[3].style.display="none";
     timing_lab.style.display="none";
     qas_lab.innerHTML="Congratulation champ<br>You win";
     start_lab.style.display="block";
     start_lab.innerHTML="Restart"
}
function lose(){
     N_qastion=0;
     time_left=90  
     cho[0].disabled=true;
     cho[1].disabled=true;
     cho[2].disabled=true;
     cho[3].disabled=true;
     qas_lab.innerHTML="SorrY champ<br>You lost!";
     start_lab.style.display="block";
     start_lab.innerHTML="Restart"
     timing_lab.style.display="none";
     
}





