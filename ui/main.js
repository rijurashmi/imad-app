console.log('Loaded!');

// change the text of the main

//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value';

/* var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

// 
img.onclick = function () {
    
  var interval = setInterval(moveRight,50);
    
//    img.style.marginLeft = '100px'; */


// Counter Code

var button = document.getElementById("counter");
var counter = 0;
button.onclick = function(){
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        // Not yet done
        }
        
    };
    
    request.open('GET','http://rijurashmi.imad.hasura-app.io/counter',true);
    request.send(null);
};

// Submit name

var nameInput = document.getElementById("name");
var name = nameInput.value;

var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    // Make a request to the server and send the name
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // Take some action
            if(request.status === 200){
                // Capture the list of names and render it as the list
                var names = request.responseText;
                names= JSON.parse(names);
                var list ='';
                for(var i=0; i < names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById("nameList");
                ul.innerHTML = list;     
            }
        // Not yet done
        }
    }
    
    request.open('GET','http://rijurashmi.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
};
