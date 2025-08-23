console.log("DOM DIM DOM DIM");

// option 2 for dom event

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

 function makeRed(){
    document.body.style.backgroundColor = 'red';
 }

//  option 3 for dom event
const btnMakeBlue = document.getElementById('btn-make-blue');
    btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const btnMakeGreen = document.getElementById('btn-make-green');

btnMakeGreen.onclick = makeGreen;
    function makeGreen(){
        document.body.style.backgroundColor = 'green';
 }