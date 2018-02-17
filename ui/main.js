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
    
    // creating a request
    
    var request = new XMLHttpRequest();
    
    //capture the response and store it in the variable
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                span.innerHTML=counter.toString();             
            }
        }
    };

request.open('GET','http://shivendra12091999.imad.hasura-app.io/counter',true);
request.send(null);
};
    
