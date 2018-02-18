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


button.onclick = function() {
    
    // creating a request
    
    var request = new XMLHttpRequest();
    
    //capture the response and store it in the variable
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
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
  
  
  //submit-name code
  
  var submit=document.getElementById('submit_btn');
  submit.onclick = function() {
      var request = new XMLHttpRequest(); //request is created
      
      request.onreadystatechange = function() { // function will execute on ready state change
      if (request.readyState === XMLHttpRequest.DONE) {
          if(request.Status === 200) {
              var names= request.responseText;
              names=JSON.parse(names);
              var list='';
              for(var i=0;i<names.length;i++) {
                  list +='<li>'+names[i]+'</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML=list;
          }
      }
          
      };
            var nameInput = document.getElementById('name');
            var name = nameInput.value;
            request.open('GET','http://shivendra12091999.imad.hasura-app.io/submit-name?name='+name,true);
            request.send(null);
  };
