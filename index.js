// Write your code here!
document.getElementById('main').remove();
let h1 = document.createElement('h1');
h1.id = 'victory';
document.body.appendChild(h1);
let newHeader = document.getElementById('victory');
newHeader.innerHTML = 'YOUR-NAME is the champion';


