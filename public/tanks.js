 
var tank=document.getElementsByClassName("hero");
var left=document.getElementsByClassName("left")[0];
var right=document.getElementsByClassName("right")[0];
var tar=document.getElementsByClassName("tar");
var button=document.getElementsByClassName("but");
var message=document.getElementById("message");
var fire=document.getElementsByClassName("shoot")[0];
var box=document.getElementsByClassName("box");
var displayscore=document.getElementById("score");
var pos=0;
var gen=0;
//variable for fire movement
var fpos=0;
//variable to calculate score
var score=0;
//variables used to end game
var end=0;
var endchk=0;
//calling function to print welcome statement
mess();
//audio for shooting
var firesound=new Audio("shoot.mp3");
//audio when game is started
var audio=new Audio("startgamefinal.mp3");
//audio when space ship is moved
var tankmove=new Audio("spaceshipmove.mp3");
//to check wether the game is running or not
var chk=1;
setupmodebutton();
//to add ground to the screen
for(var i=0;i<tank.length;i++){
	tank[i].classList.add("ground");
}
//logic  to start the game and also end it 
function setupmodebutton(){
	for(var i=0;i<button.length;i++)
	{
		button[i].addEventListener("click",function(){
			button[0].classList.remove("selected");
			button[1].classList.remove("selected");		
			this.classList.add("selected");
			//condition to start the game
			if(this.textContent==="start"){
				end=setInterval(endgame,13000);
				audio.loop=true;
				audio.play();
				chk=0;
				start();	
				tank[pos].innerHTML='<svg class="bi bi-basket-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3z"/></svg>';
			}
			//condition to end it
			else if(this.textContent==="stop"){
				audio.pause();
				chk=1;
				clearInterval(gen);
				stop();
				score=0;
				displayscore.textContent="score";
				tank[pos].textContent=".";
			}		
		});
	}

}



//event to move left the tank
left.addEventListener("click",function(){
	if(chk!==1){
	tank[pos].innerHTML=".";
	if(pos===0){
		pos=3;
	}
	else{
		pos=pos-1;
	}
	tank[pos].innerHTML='<svg class="bi bi-basket-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3z"/></svg>';	
	tankmove.play();
	}
});

//event to move right the tank
right.addEventListener("click",function(){
	if(chk!==1){
	tank[pos].textContent=".";
	pos=(pos+1)%4;
	tank[pos].innerHTML='<svg class="bi bi-basket-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3z"/></svg>';	
	tankmove.play();
	}
});
//event to fire
fire.addEventListener("click",function(){
	if(chk!==1){
	firesound.play();
	fpos=8+pos;
	for(var i=0;i<4;i++){
		if(box[fpos].textContent=='*'){
			score=score+10;
			displayscore.textContent="score "+score;
			box[fpos].textContent="#";
			break;
		}
		else if(fpos>=4){
			sleep(500);
			fpos=fpos-4;
		}
	}
}
});
//function to generate random target positions
function generatetar(){

	var arr=[];
	for(var i=0;i<5;i++){
		var flag=0;
		while(flag!=-1){
			var n=randomtar();
			if(arr.indexOf(n)==-1){
				arr.push(n);
				flag=-1;
			}
		}
		tar[n].innerHTML='*<svg class="bi bi-bullseye" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/><path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
	}
}
//function to generate random numbers less than 8
function randomtar(){
	var num=Math.floor(Math.random()*8);
	return num;
}
//fucntion to remove all the targets 
function stop(){
	for(var i=0;i<8;i++){
		tar[i].innerHTML='.';
	}
}
//function to start the game
function start(){
	gen=setInterval(function(){stop();generatetar();},3000);
}
//function to print message
function mess(){
	var name=prompt("enter your name");
	message.innerHTML="welcome "+name;
}

function sleep(milliseconds) { 
            let timeStart = new Date().getTime(); 
            while (true) { 
                let elapsedTime = new Date().getTime() - timeStart; 
                if (elapsedTime > milliseconds) { 
                    break; 
                } 
            } 
		}
//function to end game
function endgame(){
	var diff;
	diff=score-endchk;
	if(diff<50){
		audio.pause();
		chk=1;
		clearInterval(end);
		clearInterval(gen);
		stop();
		alert("you lost,your score is: "+score);
		score=0;
		displayscore.textContent="score";
		tank[pos].textContent=".";
	}
	else{
		endchk=score;
	}
}
