let 
walls_pos =[],
row = 20, 
col = 20,
speed = 200,
timeout = 2,
score = 0,
ret;
snake_length = 3,
snake_pos = 'y',
apple_pos = [row+5, col+5],
snake_head_y = parseInt(col/2),
snake_head_x = parseInt(row/2),
snake_new_elem = [row+5, col+5];
snake_y = [snake_head_y, snake_head_y+1,snake_head_y+2],
snake_x = [snake_head_x,snake_head_x,snake_head_x],
change=1;
function getBoard(board, row, col){
    for (let i=1; i<row+1; i++){
        let x_cont = document.createElement("tr");
        board.appendChild(x_cont);
        for(let j=1; j<col+1; j++){
            let quard = document.createElement("td");
            quard.className = "quard";
            quard.id = i + "-" + j;
            x_cont.appendChild(quard);
        }
    }
}
function getWalls(){
    walls_pos = [];
    let walls_max =getRandomInt(0,parseInt((row+col)/2));
    for(let i=0; i<walls_max;i++){
        walls_pos.length+=1;
        let wall_now = [getRandomInt(1,row), getRandomInt(1,col)];
        wall_now = wallConf1(wall_now);
        wall_now = wallConf2(wall_now);
        wall_now = wallConf3(wall_now);
        walls_pos[i] = wall_now;
        let wall = document.getElementById(wall_now[1]+ "-" + wall_now[0]);
        wall.classList.add('wall');
    }
    return walls_pos;
}
function wallConf1(wall_now){
    let config=0;
    for(let i=0; i<snake_length;i++){
        if (snake_x[i]==wall_now[0] && snake_y[i]==wall_now[1]){
            i=0;
            wall_now = [getRandomInt(1,row),getRandomInt(1,col)]
            config=1;
        }
    }
    if(config==1){
        wall_now = wallConf3(walls_pos, wall_now);
        wall_now = wallConf2(walls_pos, wall_now);
    }
    return wall_now;
}
function wallConf2(wall_now){
    let config = 0;
        for(let i=0; i<walls_pos.length;i++){
            if (walls_pos[i]==wall_now){
                i=0;
                wall_now = [getRandomInt(1,row),getRandomInt(1,col)]
                config = 1;
            }
        }
        if(config==1){
            wall_now = wallConf1(walls_pos, wall_now);
            wall_now = wallConf3(walls_pos, wall_now);
        }
        return wall_now;
}
function wallConf3(wall_now){
    let config = 0;
    while (snake_head_y+5 < wall_now[1] && snake_head_y-5 > wall_now[1] && snake_head_x+5 < wall_now[0] && snake_head_x-5 > wall_now[0]){
        wall_now = [getRandomInt(1,row),getRandomInt(1,col)]
        config=1;
    }
    if(config==1){
        wall_now = wallConf1(walls_pos, wall_now);
        wall_now = wallConf2(walls_pos, wall_now);
    }
    return wall_now;
}
function getWallsDel(){
    for(let i=0;i<walls_pos.length;i++){
        let wall_now = walls_pos[i];
        let wall = document.getElementById(wall_now[1] + "-" + wall_now[0]);
        wall.classList.remove('wall');
    }
}
function getScore(){
    let score_cont = document.getElementById("score_cont");
    let score_elem = document.getElementsByClassName("score");
    score_elem[0].remove();
    let score_elem_new = document.createElement("p")
    score_elem_new.className = "score";
    score_elem_new.innerHTML = "Счёт: " + score;

    score_cont.appendChild(score_elem_new);
}
function getApple(){
    apple_pos = [getRandomInt(1,row), getRandomInt(1,col)];
    apple_pos = appleConf1();
    apple_pos = appleConf2();
    let snake_now_2 = document.getElementById(apple_pos[1] + "-" + apple_pos[0]);
    snake_now_2.classList.add('apple');
}
function appleConf1(){
    let config=0;
    for(let i=0; i<snake_length;i++){
        if (snake_x[i]==apple_pos[0] && snake_y[i]==apple_pos[1]){
            i=0;
            apple_pos = [getRandomInt(1,row), getRandomInt(1,col)];
        }
    }
    if(config==1){
        apple_pos = appleConf2(apple_pos);
    }
    return apple_pos;
}
function appleConf2(){
    let config=0;
    for(let i=0; i<walls_pos.length;i++){
        let wall_now_1 = walls_pos[i];
        if (apple_pos==wall_now_1){
            i=0;
            apple_pos = [getRandomInt(1,row),getRandomInt(1,col)]
            config = 1;
        }
    }
    if(config==1){
        apple_pos = appleConf1();
    }
    return apple_pos;
}
function getDelApple(){
    let apple_del = document.getElementById(apple_pos[1] + "-" + apple_pos[0]);
    apple_del.classList.remove('apple');
    getSnakePlus();
    score+=1;
    getScore();
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function getSnakePos(){
    snake_new_elem = [snake_x[snake_x.length-1], snake_y[snake_y.length-1]];
    for(let i=snake_length-1; i>0; i--){
        snake_y[i] = snake_y[i-1];
        snake_x[i] = snake_x[i-1];
    }
        switch (snake_pos){
            case 'y':
                snake_y[0]-=1;
                snake_head_y-=1;
                if (snake_y[0]<1) {
                    snake_y[0]=col;
                    snake_head_y=col;
                }
                break;
            case '-y':
                snake_y[0]+=1;
                snake_head_y+=1;
                if (snake_y[0]>col) {
                    snake_y[0]=1;
                    snake_head_y=1;
                }
                break;
            case 'x':
                snake_x[0]-=1;
                snake_head_x-=1;
                if (snake_x[0]<1) {
                    snake_x[0]=row;
                    snake_head_x=row;
                }
                break;
            case '-x':
                snake_x[0]+=1;
                snake_head_x+=1;
                if (snake_x[0]>row) {
                    snake_x[0]=1;
                    snake_head_x=1;
                }
                break;
        }

}
function getMove(){
        let snake_now = document.getElementById(snake_y[snake_y.length-1] + "-" + snake_x[snake_x.length-1]);
        snake_now.classList.remove('snake');
        getSnakePos();
        let snake_now_2 = document.getElementById(snake_head_y + "-" +snake_head_x);
        snake_now_2.classList.add('snake');
}
function getSnake(){
    for(let i=0; i<snake_length;i++){
        let snake_now = document.getElementById(snake_y[i] + "-" + snake_x[i]);
        snake_now.classList.add('snake');
    }
}
function getSnakePlus(){
    snake_length+=1;
    snake_x.length+=1;
    snake_y.length+=1;
    let snake_now = document.getElementById(snake_new_elem[1] + "-" + snake_new_elem[0]);
    snake_now.classList.add('snake');
    snake_x[snake_x.length-1] = snake_new_elem[0];
    snake_y[snake_y.length-1] = snake_new_elem[1];
}
function getLose(){
    for(let i=0; i<snake_y.length;i++){
        let snake_now = document.getElementById(snake_y[i] + "-" + snake_x[i]);
        snake_now.classList.remove('snake');
    }
    for(let i=0; i<walls_pos.length;i++){
        let snake_now = document.getElementsByClassName("wall");
        snake_now[i].classList.remove('wall');
    }
    getDelApple();
    snake_length=3;
    score =0;
    snake_pos = 'y';
    apple_pos = [row+5, col+5];
    snake_head_y = parseInt(col/2);
    snake_head_x = parseInt(row/2);
    snake_new_elem = [row+5, col+5];
    snake_y = [snake_head_y, snake_head_y+1,snake_head_y+2];
    snake_x = [snake_head_x,snake_head_x,snake_head_x];
    change=1;
    walls_pos =[];
}
window.onload = function(){
    let board = document.getElementById("board");
    let start_but = document.getElementById("start");
    getBoard(board, row, col);
    start_but.onclick = getStart;
}
function getStart(){
    getSnake();
    getWalls();
    getApple();
    let inter = setInterval(() => {
        getMove();
        change=1;
        for(let i=0; i<walls_pos.length;i++){
            let wall_now_2 = walls_pos[i];
            if (snake_head_x==wall_now_2[0] && snake_head_y==wall_now_2[1]){
                getLose();
                clearInterval(inter);
            }
        }
        for(let i=1; i<snake_length;i++){
            if(snake_head_x==snake_x[i] && snake_head_y==snake_y[i]){
                getLose;
                clearInterval(inter);
            }
        }
        if (snake_head_x==apple_pos[0] && snake_head_y==apple_pos[1]){
            getWallsDel();
            getDelApple();
            getWalls();
            setTimeout(() => {
                getApple();
            }, timeout*1000);
        }
    }, speed);
    document.addEventListener('keydown', function(event){
        if (event.code == 'KeyW' && change==1 && snake_x[0]!=snake_x[1]) {
            snake_pos='y';
            change=0;
        }
        else if (event.code =='KeyA' && change==1 && snake_y[0]!=snake_y[1]) {
            snake_pos='x';
            change=0;
        }
        else if (event.code == 'KeyD' && change==1 && snake_y[0]!=snake_y[1]) {
            snake_pos='-x';
            change=0;
        }
        else if (event.code=='KeyS' && change==1 && snake_x[0]!=snake_x[1]){
            snake_pos='-y';
            change=0;
        }
    });
}