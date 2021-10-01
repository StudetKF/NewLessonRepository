function getElement(elem_type, elem_class, elem_parent){
    let quard = document.createElement(elem_type);
    quard.className = elem_class;
    elem_parent.appendChild(quard);
}
function getNum(elem_type, elem_class, elem_parent, in_elem){
    let quard = document.createElement(elem_type);
    quard.className = elem_class;
    quard.innerHTML = in_elem;
    elem_parent.appendChild(quard);
}
function getImg(elem_type, elem_class, elem_parent, elem_img, num, i){
    let quard = document.createElement(elem_type);
    if (num==2 || num==7) quard.className = "horse "+ elem_class;
    else if (num==4 || num==5) quard.className = "king "+ elem_class;
    else quard.className = elem_class;
    if (i==7 || i==8) quard.style.fill="white";
    quard.style.backgroundImage = elem_img;
    elem_parent.appendChild(quard);
}
window.onload = function(){
    let board = document.getElementById("chess-board");
    let abc = document.getElementById("abc");
    let num = document.getElementById("num");
    let abc2 = document.getElementById("abc2");
    let num2 = document.getElementById("num2");
    let fig_board = document.getElementById("figure-board");
    let figure_num = ["url('../img/Tower.svg')", "url('../img/Horse.svg')", "url('../img/Oficer.svg')", "url('../img/Queen.svg')", "url('../img/King.svg')", "url('../img/Oficer.svg')", "url('../img/Horse.svg')","url('../img/Tower.svg')"];
    let figure_num2 = ["url('../img/Tower2.svg')", "url('../img/Horse2.svg')", "url('../img/Oficer2.svg')", "url('../img/Queen2.svg')", "url('../img/King2.svg')", "url('../img/Oficer2.svg')", "url('../img/Horse2.svg')","url('../img/Tower2.svg')"];
    let pawn = "url('../img/Pawn.svg')";
    let pawn2 = "url('../img/Pawn2.svg')";
    for(let i=1; i<9;i++){
        for(let j=1; j<9;j++){
            if(j%2==0 && i%2!=0){
                getElement("div", "black-quard", board);
            }
            else if(j%2==0 && i%2==0){
                getElement("div", "white-quard", board);
            }
            else if(j%2!=0 && i%2!=0){
                getElement("div", "white-quard", board);
            }
            else{
                getElement("div", "black-quard", board);
            }
            if(i==1) getImg('div', 'figure', fig_board, figure_num[j-1], j, i);
            else if(i==8) getImg('div', 'figure', fig_board, figure_num2[j-1], j, i);
            else if(i==2) getImg('div', 'figure', fig_board, pawn, 0, i);
            else if(i==7) getImg('div', 'figure', fig_board, pawn2, 0, i);
            else getElement("div", "figure", fig_board)
        }
    }
    let abc_in = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for(let i=1; i<9; i++){
        getNum("p", "numbers", num, i);
        getNum("p", "abcs", abc, abc_in[i-1]);
        getNum("p", "numbers num-l", num2, i);
        getNum("p", "abcs abc-l", abc2, abc_in[i-1]);
    }
}