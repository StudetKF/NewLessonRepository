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
        let n=0, s="";
        while (n<=100){
            s+=n + " ";
            n+=1;
        }
        if (ex_st1_ == 0){
            let text = document.createElement('p');
            text.className = "ex-text";
            text.innerHTML = s;
            ex_st1_ = 1;
            ex1.appendChild(text);
        }
    }
    but3.onclick = function(){
        ex_st3 = getDisplay(ex3, ex_st3);
        //Задание 3
        let mes = [];
        let mes0;
        document.forms.temp.onsubmit = function() {
            let message = this.message1.value;
            mes0 = message.split(" ");
            mes = mes.concat(mes0);
            let str = "";
            for(let i = 0; i<mes.length;i++){
                str+= mes[i] + " ";
            }
            if (cnt == 1){
                let one = document.getElementsByClassName("b-text");
                one[0].parentNode.removeChild(one[0]);
            } 
            let text = document.createElement('p');
            text.className = "ex-text b-text";
            text.innerHTML = str;
            basket_list.appendChild(text);
            cnt = 1;
            return false;
        }
        function countBasketPrice(arr){
            n=0;
            for(let i = 0; i<arr.length;i++){
                n += parseInt(arr[i]);
            }
            if (cnt2 == 1){
                let one2 = document.getElementsByClassName("b-text");
                one2[1].parentNode.removeChild(one2[1]);
            } 
            let text = document.createElement('p');
            text.className = "ex-text b-text";
            text.innerHTML = n;
            cell.appendChild(text);
            cnt2 = 1;
        }
        let but1 = document.getElementById("but1");
        but1.onclick = function(){
            countBasketPrice(mes);
        }
        clear.onclick = function(){
            mes.length=0;
            let one2 = document.getElementsByClassName("b-text");
            if (cnt==1) one2[0].parentNode.removeChild(one2[0]);
            if (cnt2==1) one2[0].parentNode.removeChild(one2[0]);
            cnt = 0; cnt2 = 0;
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