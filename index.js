// Write your code here!

document.querySelector('main#main').remove();


let newHeader = document.createElement('h1');

newHeader.innerHTML = "<h1> Jack is the champion </h1>";

document.body.appendChild(newHeader);

newHeader.setAttribute('id', 'victory');

// newHeader.
// document.body.appendChild