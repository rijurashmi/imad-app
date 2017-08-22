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



// Submit username/password to login

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
               console.log('User logged in.');
               alert('Logged in successfully');
            }
            else if(request.status === 403){
                alert('username/password is incorrect');
            }
            else if(request.status === 500){
                alert('Something went wrong on the server');
            }
        }
    }
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    request.open('POST','http://rijurashmi.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username:username, password:password}));
};
