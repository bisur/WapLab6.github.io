/*window.onload= function () {
   let click_btn = document.getElementById("decoration");
   click_btn.onclick = function () {
     return alert("Hello, world!")
   };
};*/

// Exercise: Enlarge TExt
window.onload= function () {
    let click_btn = document.getElementById('decoration');
    click_btn.onclick = function () {
       return  document.getElementById('textarea').style.fontSize="24pt";
    };
};

// Exercise: Bling check box
window.onload= function () {
    var blingbtn = document.getElementById('bling');
    blingbtn.onchange = function () {
        var boldtxt =document.getElementById('textarea');
        if (blingbtn.checked){
            boldtxt.style.fontWeight="bold";
            boldtxt.style.color="green";
            boldtxt.style.textDecoration="underline"
        }
        else{
            boldtxt.style.fontWeight="";
            boldtxt.style.color="";
            boldtxt.style.textDecoration=""
        }

    };
};

// Exercise: Timer
/*
window.onload= function () {
    let click_btn = document.getElementById('decoration');
    click_btn.onclick = function () {
        var currentSize =  document.getElementById('textarea').tagName.;
    };
};*/
