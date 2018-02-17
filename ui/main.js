/*
console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML="New VAlue";


//Moving the picture on clicking-----

var img = document.getElementById('madi');
img.onclick=function() {
    img.style.marginLeft='100px';
    
};


//Applying the gradual animation to the image--------

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function() {
    var Interval = setInterval(moveRight,100);
    
};

*/



//counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function() {
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML=(counter.toString());
};
    
