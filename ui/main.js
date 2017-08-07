console.log('Loaded!');

// change the text of the main

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('madi');

img.onClick = function () {
    img.style.marginLeft = '100px';
};