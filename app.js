//GET UI
var getsignupbtn = document.getElementById('signup-btn'),
    getfullscreenbtn = document.getElementById('fullscreen-btn'),
    getclfullscreenbtn = document.getElementById('closefullscreen-btn');

var getmodal = document.querySelector('.modal'),
    getbtnclose = document.querySelector('.btn-close');

getsignupbtn.addEventListener('click',function(){
    getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
//     console.log(e.target);

   if(e.target === getmodal){
        getmodal.style.display = "none";
   }

};

//console.log(document);
//console.log(document.documentElement)


var getdocele = document.documentElement;

getfullscreenbtn.addEventListener('click',function(){

    if(getdocele.requestFullscreen){
        getdocele.requestFullscreen();
    }else if(getdocele.webkitRequestFullscreen){
        getdocele.webkitRequestFullscreen();
    }else if(getdocele.msRequestFullscreen){
        getdocele.msRequestFullscreen();
    }

    getclfullscreenbtn.style.display = "inline-block";

});

getclfullscreenbtn.addEventListener('click',function(){

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }

    getclfullscreenbtn.style.display = "none";

});

//27MD












