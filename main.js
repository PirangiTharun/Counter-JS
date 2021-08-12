let val=document.getElementById("value");

function reset(){
    val.innerText=0;
    if(parseInt(val.innerText)>0){
        val.classList.remove("greenclass");
    }else{
        val.classList.remove("redclass");
    }
}

function increase(){
    val.innerText=parseInt(val.innerText)+1;
    if(parseInt(val.innerText)>0){
        val.classList.add("greenclass");
    }
    if(parseInt(val.innerText)==0){
        val.classList.remove("redclass");
    }
}

function decrease(){
    val.innerText=parseInt(val.innerText)-1;
    if(parseInt(val.innerText)<0){
        val.classList.remove("greenclass");
        val.classList.add("redclass");
    }
    if(parseInt(val.innerText)==0){
        val.classList.add("greenclass");
    }
}