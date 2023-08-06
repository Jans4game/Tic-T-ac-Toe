const button1 = document.querySelector('#mat1');
const button2 = document.querySelector('#mat2');
const button3 = document.querySelector('#mat3');
const button4 = document.querySelector('#mat4');
const button5 = document.querySelector('#mat5');
const button6 = document.querySelector('#mat6');
const button7 = document.querySelector('#mat7');
const button8 = document.querySelector('#mat8');
const button9 = document.querySelector('#mat9');

let ind = 'o';

function toggler(clicked_id){
    let l = clicked_id;
    console.log(l);
    let b = l.slice(3);
    console.log(b);
    const button = document.querySelector(`#mat${b}`);
    if (ind == 'o'){
        button.textContent = 'x';
        ind = 'x';
    } else {
        button.textContent = 'o';
        ind = 'o';
    }
    document.getElementById(`mat${b}`).onclick = null;
    game();
}

function game() {
    let winner;
    if (button1.textContent == 'x' && button2.textContent == 'x' && button3.textContent == 'x'){
        winner = button1.textContent;
    } else if (button4.textContent =='x' && button5.textContent =='x' && button6.textContent =='x'){
        winner = button4.textContent;
    } else if (button7.textContent =='x' && button8.textContent =='x' && button9.textContent =='x'){
        winner = button7.textContent;
    } else if (button1.textContent =='x' && button4.textContent =='x' && button7.textContent =='x'){
        winner = button1.textContent;
    } else if (button2.textContent =='x' && button5.textContent =='x' && button8.textContent =='x'){
        winner = button2.textContent;
    } else if (button3.textContent =='x' && button6.textContent =='x' && button9.textContent =='x'){
        winner = button3.textContent;
    } else if (button1.textContent =='x' && button5.textContent =='x' && button9.textContent =='x'){
        winner = button1.textContent;
    } else if (button3.textContent =='x' && button5.textContent =='x' && button7.textContent =='x'){
        winner = button3.textContent;
    } else if (button1.textContent =='o' && button2.textContent =='o' && button3.textContent =='o'){
        winner = button1.textContent;
    } else if (button4.textContent =='o' && button5.textContent =='o' && button6.textContent =='o'){
        winner = button4.textContent;
    } else if (button7.textContent =='o' && button8.textContent =='o' && button9.textContent =='o'){
        winner = button7.textContent;
    } else if (button1.textContent =='o' && button4.textContent =='o' && button7.textContent =='o'){
        winner = button1.textContent;
    } else if (button2.textContent =='o' && button5.textContent =='o' && button8.textContent =='o'){
        winner = button2.textContent;
    } else if (button3.textContent =='o' && button6.textContent =='o' && button9.textContent =='o'){
        winner = button3.textContent;
    } else if (button1.textContent =='o' && button5.textContent =='o' && button9.textContent =='o'){
        winner = button1.textContent;
    } else if (button3.textContent =='o' && button5.textContent =='o' && button7.textContent =='o'){
        winner = button3.textContent;
    }

    let truewinner;
    const display = document.querySelector('#result');
    if (winner == 'x'){
        truewinner = "X wins";
        display.textContent = truewinner;
        document.getElementById("mat1").onclick = null;
        document.getElementById("mat2").onclick = null;
        document.getElementById("mat3").onclick = null;
        document.getElementById("mat4").onclick = null;
        document.getElementById("mat5").onclick = null;
        document.getElementById("mat6").onclick = null;
        document.getElementById("mat7").onclick = null;
        document.getElementById("mat8").onclick = null;
        document.getElementById("mat9").onclick = null;
    } else if (winner =='o'){
        truewinner = "O wins";
        display.textContent = truewinner;
        display.textContent = truewinner;
        document.getElementById("mat1").onclick = null;
        document.getElementById("mat2").onclick = null;
        document.getElementById("mat3").onclick = null;
        document.getElementById("mat4").onclick = null;
        document.getElementById("mat5").onclick = null;
        document.getElementById("mat6").onclick = null;
        document.getElementById("mat7").onclick = null;
        document.getElementById("mat8").onclick = null;
        document.getElementById("mat9").onclick = null;
    }

}

function restartgame() {
    window.location.reload();
}