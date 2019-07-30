 //render(Pacman) - arata partea vizuala  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function renderPacman(l, t, e){                        
    var box = document.getElementById("box");  
    if(e){
                    //cauta elementul box
     box.innerHTML = `<div style="left:${l}px; top:${t}px;" class="pacman explode"></div> `   //afiseaza clasa din HTML
     /// variabila = "text"->    noi am schimbat continutul variabilei
    }else{
            box.innerHTML = `<div style="left:${l}px; top:${t}px;" class="pacman"></div> `    
    } 
    }
function renderCoin(){
    var box = document.getElementById("box");
    box.innerHTML = `<div class="coin"></div> `
}
/// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function renderBomb(l, t){                        
    var box = document.getElementById("box");               
     box.innerHTML += `<div style="left:${l}px; top:${t}px;" class="bomb"></div> `  
                    
    }
///



function moveRight(){
    if(pl <=440){               
    pl += 10
    }
} 
function moveLeft(){
    if(pl >=10){
    pl -= 10
    }
}
function moveTop(){
    if(pt >=0){
    pt -=10
    }
}
function moveButtom(){
    if(pt <=440){
    pt +=10
    }
}
function checkBomb(){      /// scopul functii este return cind este aproape de bomba
   if(pl == bl&&pt == bt){
      return true;
   } else{
       return false;
   }                       

}









function move(){              ///se apeleaza doar cind apasam pe tasta (cind facem o actiune)
    console.log(event.key)
    switch(event.key){
        case "ArrowUp": moveTop();break;
        case "ArrowLeft": moveLeft();break;
        case "ArrowRight": moveRight();break;
        case "ArrowDown": moveButtom();break;

    }
    if(checkBomb()){
        renderPacman(pl, pt, true);
    }else{
        renderPacman(pl, pt);
    }



    
    renderBomb(bl,bt);
}
  



// actiune
var pl = 100
var pt = 100
var bl = 200
var bt = 200

renderPacman(pl, pt)
renderBomb(bl,bt);
// renderCoin()