window.onload= function(){
    const game = document.getElementById("game");
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const controls= document.getElementsByClassName("controls");
    const button = document.getElementsByClassName("btn")[0];

    const ele = board.querySelectorAll('div');
    let play='X';
    let poslst = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for(let a=0; a<=8; a++){
        ele[a].setAttribute("class","square");
    }
}

