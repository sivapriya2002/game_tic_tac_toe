var x = " X";
var o = " O";
let a = false;
let b = false;
let stopGame = false;
person_x_ids = [];
person_y_ids = [];
const winConditions = [
    ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
    ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],
    ["1", "5", "9"], ["3", "5", "7"]];
function fun(id) {
    if (!stopGame) {
        if (!a && document.getElementById(id).innerText === '') {
            a = true;
            b = false;
            document.getElementById(id).innerHTML = x;
            document.getElementById(id).style.backgroundColor = "rgba(255, 99, 71, 0.5)";
            person_x_ids.push(id);
            if (person_x_ids.length >= 3) {
                for (let check of winConditions) {
                    if (check.every(id => person_x_ids.includes(id))) {
                        setTimeout(function () {
                            stopGame = true;
                            alert("game over,winner X")
                            // openDialog(x);
                        }, 500);
                        return;
                    }
                }
            }
        } else if (!b && document.getElementById(id).innerText === '') {
            b = true;
            a = false;
            document.getElementById(id).innerHTML = o;
            document.getElementById(id).style.backgroundColor = "rgba(96,233,24)";
            person_y_ids.push(id);
            if (person_y_ids.length >= 3) {
                for (let check of winConditions) {
                    if (check.every(id => person_y_ids.includes(id))) {
                        stopGame = true;
                        setTimeout(function () {
                            alert("game over,winner O");
                            // openDialog(o);
                        }, 500)
                        return;
                    }
                }
            }
        }
    }
}
