// DESIGNED BY: ROY CUADRA
// BSIT - 2

function randInt(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function noClick(){
    while ( ((x-valuex)<30 && (x-valuex)>-30) && ((y-valuey)<30 && (y-valuey)>-30  )){
        valuex=randInt(0,90);
        valuey = randInt(0,90);
    }
    x = valuex;
    y = valuey;
    
    no.style.position = "absolute";
    no.style.top=valuey+"px";
    no.style.left=valuex+"px";    
}
d = document;
no = d.getElementById('no');
d.getElementById('yes').addEventListener("click",()=>{
    d.getElementById("ques").innerText = "Thank you for being Honest 🤣";
    no.removeEventListener("click", noClick);
});


var valuex=0,valuey=0,x=0,y=0;
no.addEventListener("click",noClick);

