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
    
    // make a request to the counter endpoint
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.resdyState === XMLHttyRequest.DONE){
            // Take some action
            if(request.status === 200){
                var counter = request.responseText();
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        // Not yet done
        }
        
    };
    
    // Capture the response and store it in a variable
    
    
    // Render the variable in the correct span
    //counter = counter + 1;
    //var span = document.getElementById("count");
    //span.innerHTML = counter.toString();
};