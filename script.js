var player='X';
var gb=[['','',''],
    ['','',''],
    ['','','']];

    function winner() {
        for (let i = 0; i < 3; i++) {
            if (gb[i][0] !== '' && gb[i][0] === gb[i][1] && gb[i][1] === gb[i][2]) {
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (gb[0][i] !== '' && gb[0][i] === gb[1][i] && gb[1][i] === gb[2][i]) {
                return true;
            }
        }
        if ((gb[0][0] !== '' && gb[0][0] === gb[1][1] && gb[1][1] === gb[2][2]) || 
            (gb[0][2] !== '' && gb[0][2] === gb[1][1] && gb[1][1] === gb[2][0])) {
            return true;
        }
    
        return false;
    }
    
function drawmatch() {
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(gb[i][j]=="") {
                return false;
            }
        }
    }
    return true;
}

function resetboard() {
    for(let i=0; i<9; i++) {
         document.getElementById(i).innerHTML="";
    }
    gb=[['','',''],
    ['','',''],
    ['','','']];
    document.getElementById("result").innerHTML = `Let's begin`;
    player = 'X'; 
}

function addfun(a, b, c) {
    if(gb[a][b]==''){
        gb[a][b] = player;
        document.getElementById(c).innerHTML = player; 
    }
    if (winner()) {
        document.getElementById("result").innerHTML = `Player ${player} has won!!\nCongratulations`;
    } else if (drawmatch()) {
        document.getElementById("result").innerHTML = `It's a draw! Try again.`;
    } else {
        if (player == 'X') {
            player = 'O';
        } else {
            player = 'X';
        }
        document.getElementById("result").innerHTML = `Player ${player} turn`;
    }
}

