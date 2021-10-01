let opgm = 0;
function getDisplay(element, ex_st){
    let op;
    if(ex_st==0){
        element.style.display = "block";
        op = 0; 
        let timer = setInterval(() => {op+=0.01;element.style.opacity = op;}, 5);
        setTimeout(() => { clearInterval(timer);element.style.opacity = "1";}, 500);
        return 1;
    }
    else{
        op=1;
        let timer = setInterval(() => {element.style.opacity = op; op-=0.01;}, 5);
        setTimeout(() => { clearInterval(timer); element.style.display = "none";element.style.opacity = "0";}, 500);
        return 0;
    }
}
function convertor(num){
    let obj = {
        Единицы: 0,
        Десятки: 0,
        Сотни: 0
    };
    if (num < 0 || num > 999){
        obj.Сотни = null;
        obj.Десятки = null;
        obj.Единицы = null;
        return obj;
    }
    else if(String(num[0]) == 0){
        return obj;
    }
    else{
        if(num<10){
            obj.Единицы = num;
        }
        else if(num<100){
            obj.Десятки = parseInt(num / 10);
            obj.Единицы = num % 10;
        }
        else{
            obj.Сотни = parseInt(num / 100);
            obj.Десятки = parseInt((num % 100) / 10);
            obj.Единицы = num % 10;
        }
        return obj;
    }
}
let cnt = 0, cnt2 = 0;
window.onload = function(){
    let but2 = document.getElementById("but2");
    let but3 = document.getElementById("but3");
    let but4 = document.getElementById("but4");
    let but5 = document.getElementById("but5");
    let ex1 = document.getElementById("ex1");
    let ex3 = document.getElementById("ex3");
    let ex4 = document.getElementById("ex4");
    let ex5 = document.getElementById("ex5");
    let basket_list = document.getElementById("basket-list");
    let cell = document.getElementById("cell");
    let clear = document.getElementById("clear");
    let ex_st1 = 0, ex_st3 = 0, ex_st4 = 0, ex_st5 = 0;
    let ex_st1_ = 0, ex_st4_ = 0, ex_st4_2 = 0, ex_st5_ = 0;
    but2.onclick = function(){
        ex_st1 = getDisplay(ex1, ex_st1);
        //Задание 1
        let mes = [];
        let mes0;
        let obj;
        document.forms.temp.onsubmit = function() {
            let message = this.message1.value;
            mes = message;
            if (cnt > 0){
                let one = document.getElementsByClassName("num-conv");
                for(let i =0; i<cnt;i++){
                    one[0].parentNode.removeChild(one[0]);
                }
                cnt=0;
            } 
            obj = convertor(mes);
            if (obj.Единицы!=null){
                for(let key in obj){
                    let text = document.createElement('p');
                    text.className = "ex-text num-conv";
                    text.innerHTML = key + ": " + obj[key];
                    ex1.appendChild(text);
                    cnt += 1;
                }
            }
            else{
                let text = document.createElement('p');
                text.className = "ex-text num-conv";
                text.innerHTML = "Введите число не меньше 0 и не больше 3 знаков";
                ex1.appendChild(text);
                cnt = 1;
            }
            return false;
        }
    }
    but3.onclick = function(){
        ex_st3 = getDisplay(ex3, ex_st3);
        //Задание 2
        function getQuestStr(str){
            let text = document.createElement('p');
            text.className = "game-str";
            text.innerHTML = str;
            game_div.appendChild(text);
            getDisplay(text, 0);
        }
        let timeQuest = [0,0,0,0,0,0,0,0,0];
        function getTimeQuest(){
            switch (timeQuest[0]){
                case 1:
                    getQuestStr("[ЗАПУСК ПРИЛОЖЕНИЯ]");
                    timeQuest[0]+=1;
                    break;
                case 2:
                    getQuestStr("[ПОИСК]");
                    timeQuest[0]+=1;               
                    break;
                case 3:
                    getQuestStr("[ОБНАРУЖЕН НОВЫЙ ИСТОЧНИК СИГНАЛА]");
                    timeQuest[0]+=1;
                    break;
                case 4:
                    getQuestStr("[ВХОДЯЩИЙ ВЫЗОВ]");
                    timeQuest[0]+=1;
                    break;
                case 5:
                    getQuestStr("[... ... ...]");
                    timeQuest[0]+=1;
                    break;
                case 6:
                    getQuestStr("[КОНТАКТ УСТАНОВЛЕН]");
                    timeQuest[0]+=1;
                    break;
                case 7:
                    getQuestStr("... Не может быть! О Боже!");
                    timeQuest[0]+=1;
                    break;
                case 8:
                    getQuestStr("Эй! Я поймал ваш сигнал! Отзовитесь!");
                    timeQuest[0]+=1;
                    break;
                case 9:
                    getQuestStr("Умоляю, только не молчите!");
                    timeQuest[0]+=1;
                    break;
                case 10:
                    getQuestStr("Есть кто живой? Ответьте!");
                    timeQuest[0]+=1;
                    break;
                case 11:
                    getButton("Прервать связь!", "Я тебя слышу!", 1);
                    timeQuest[0]+=1;
                    break;
            }
            switch (timeQuest[1]){
                case 1:
                    getQuestStr("[Вы перезагрузили устройство и удалили программу]");
                    timeQuest[1]+=1;
                    break;
                case 2:
                    getQuestStr("[Забыв короткое приключение, Вы прожили спокойно ещё две недели, так и не узнав о загадке 'Убежища М-2']");
                    timeQuest[1]+=1;
                    break;
                case 3:
                    getQuestStr("[А потом в Вашу дверь постучала соседская девчонка, заражённая вирусом Z-01.21]");
                    timeQuest[1]+=1;
                    break;
                case 4:
                    getQuestStr("[Вы давно хотели с ней подружиться, а потому без лишних слов открыли дверь]");
                    timeQuest[1]+=1;
                    break;
                case 5:
                    getQuestStr("[И вовсе не для дружеских объятий]");
                    timeQuest[1]+=1;
                    break;
                case 6:
                    getQuestStr("[Её зубы были острыми, а укус быстрым]");
                    timeQuest[1]+=1;
                    break;
                case 7:
                    getQuestStr("[Чего нельзя сказать о вашей гибели]");
                    timeQuest[1]+=1;
                    break;
                case 8:
                    getEnd();
                    timeQuest[1]+=1;
                    break;
            }
            switch (timeQuest[2]){
                case 1:
                    getQuestStr("Слава Богу! Живой человек. Невероятно!");
                    timeQuest[1]+=1;
                    break;
                case 1:
                    getQuestStr("Послушай меня, подалуйста, только не переключай канал!");
                    timeQuest[1]+=1;
                    break;
                case 1:
                    getQuestStr("Я в беде! В серьёзной передряге!");
                    timeQuest[1]+=1;
                    break;
                case 1:
                    getQuestStr("Мне нужна помощь!");
                    timeQuest[1]+=1;
                    break;
                case 1:
                    getButton("Кто ты?", "Я отключаюсь!", 2);
                    timeQuest[1]+=1;
                    break;
            }
            game_div.scrollTop = game_div.scrollHeight;
        }
        let item =[0, 0]
        function getBut2(textBut1, textBut2, numBut, divId){
            let cont = document.getElementById(divId);
            let button1 = document.createElement('button');
            button1.className = "quest-but";
            button1.innerHTML = textBut1;
            cont.appendChild(button1);
            let button2 = document.createElement('button');
            button2.className = "quest-but";
            button2.innerHTML = textBut2;
            cont.appendChild(button2);
            getDisplay(button2, 0);
            getDisplay(button1, 0);
            button1.onclick = function(){
                if(numBut == 1){
                    getStr("2");
                    item[0] = 1;
                }
                if(numBut == 2){
                    item[1] = 1; 
                }
                if(numBut == 4){
                    let text = document.createElement('p');
                text.className = "game-str";
                text.innerHTML = item[0];
                game_div.appendChild(text);
                getDisplay(text, 0);
                }
            }
            button2.onclick = function(){
                if(numBut == 1){
                    getStr("3");
                    item[0] = 2;
                }
                if(numBut == 2){
                    item[1] = 2;
                }
                if(numBut == 4){
                    let text = document.createElement('p');
                    text.className = "game-str";
                    text.innerHTML = item[1];
                    game_div.appendChild(text);
                    getDisplay(text, 0);
                }
            }
        }
        function getButton(textBut1, textBut2, numBut){
            let buttonDiv = document.createElement('div');
            buttonDiv.className = "quest-but-container";
            buttonDiv.id = "questButtonDiv" + numBut;
            game_div.appendChild(buttonDiv);
            getDisplay(buttonDiv, 0);
            buttonDiv.style.display = "flex";
            getBut2(textBut1, textBut2, numBut, buttonDiv.id);
        }
        function getEnd(){
            let button = document.createElement('button');
            button.className = "end-button";
            button.innerHTML = "Начать заново";
            game_div.appendChild(button);
            getDisplay(button, 0);
        }
        let strt = 0;
        function getStr(num){
            let stop = 500;
            switch (num){
                case "1":
                    timeQuest[0] = 1;
                    for(let i=0; i<11; i++) {
                        setTimeout(getTimeQuest, stop);
                        stop+=1500;
                    }
                    stop = 0;
                    break;
                case "2":
                    timeQuest[1] = 1;
                    for(let i=0; i<9; i++) {
                        setTimeout(getTimeQuest, stop);
                        stop+=1500;
                    }
                    stop = 1500;
                    break;
                case "3":
                        timeQuest[2] = 1;
                        for(let i=0; i<5; i++) {
                            setTimeout(getTimeQuest, stop);
                            stop+=1500;
                        }
                        stop = 1500;
                        break;
            }
        }
        let open_game = document.getElementById("open-game");
        let game_div = document.getElementById("game-div");
        let menu_cont = document.getElementById("menu-cont");
        let start = document.getElementById("start");
        let menu = document.getElementById("menu");
        let doc = document.documentElement;
        let requestFunc = (doc.requestFullscreen || doc.webkitRequestFullScreen),
        cancelFunc = (document.cancelFullScreen || document.webkitCancelFullScreen);
        
        let start_text = document.createElement("h1")
        start_text.className = "start-text";
        start_text.innerHTML = "Игра копирует начало квеста 'Симбионт'";
        game_div.appendChild(start_text);
        setTimeout(getDisplay(start_text, 0), 500);
        //С esc реализовать не получилось, стиль корректно меняется только через кнопку
        open_game.onclick = function(){
            if (opgm == 0){
                requestFunc.call(ex3);
                game_div.className = "game-div-full game-div";
                menu_cont.className = "menu-cont menu-cont-full";
                start.className = "start start-full";
                open_game.style.width = "35px";
                open_game.style.height = "35px";
                open_game.style.marginTop = "20px";
                menu.className = "menu menu-full";
                opgm=1;
            }
            else{
                cancelFunc.call(document);
                game_div.className = "game-div";
                menu_cont.className = "menu-cont";
                start.className = "start";
                open_game.className = "open-game";
                open_game.style.width = "20px";
                open_game.style.height = "20px";
                open_game.style.marginTop = "10px";
                menu.className = "menu";
                opgm = 0;
            }
        }
        let startmarker = 0;
        start.onclick = function(){
            if (startmarker == 0){
                startmarker = 1;
                getDisplay(start_text, 1);
                setTimeout(()=>{getStr("1");},500);
                menu.onclick = function(){
                    getButton("Действие 1", "Действие 2", 4);
                }
            }
        }
    }
    but4.onclick = function(){
        ex_st4 = getDisplay(ex4, ex_st4);
        //Задание 4
        if (ex_st4_ == 0){
            let text2 = document.createElement('p');
            text2.className = "ex-text";
            text2.innerHTML = "Решение для консоли: for (let i = 0; console.log(i), i++ < 9;);";
            ex_st4_2 = 1;
            ex4.appendChild(text2);
            let text = document.createElement('p');
            text.className = "ex-text";
            let str1='';
            //В следующей строке цикл
            for (let i = 0; str1+=i + " ", i++ < 9;);
            text.innerHTML = str1;
            ex_st4_ = 1;
            ex4.appendChild(text);
        }
    }
    but5.onclick = function(){
        ex_st5 = getDisplay(ex5, ex_st5);
        //Задание 5
        for(let i = 1;i < 21;i++){
            let stars = "";
            for(let j = 0;j < i;j++){
                stars+="x";
            }
            if (ex_st5_ != 1){
                let text = document.createElement('p');
                text.className = "ex-text stars";
                text.innerHTML = stars;
                ex5.appendChild(text);
            }
        }
        ex_st5_ = 1;
    }
}
