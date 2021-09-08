window.addEventListener('DOMContentLoaded',function(){
    let button_menu = document.getElementById("menu-but");
    let menu_visible = document.getElementById("menu");
    let menu_close = document.getElementById("menu-close");
    let label = document.getElementById("label");
    let menuH = document.getElementById("menu-h");
    let menuUlCont = document.getElementById("menu-ul-cont");
    let opa = 0;
    let LabelMT = 0;
    let menu_list = document.getElementsByClassName("menu-li");
    let menu_h5 = document.getElementsByClassName("menu-h5")
    let head_but_4 = document.getElementsByClassName("head-but-4");
    let head_but_5 = document.getElementsByClassName("head-but-5");
    let head_but_1 = document.getElementsByClassName("head-but-1");
    button_menu.onclick = function(){
        let timerId = setInterval(() => {
            menu_visible.style.display = "block";
            opa += 0.01; 
            menu_visible.style.opacity = opa;
            if (window.innerWidth <= 768 && window.innerWidth > 426 || (window.innerWidth <= 800 && window.innerWidth >= 769 && window.innerHeight <= 426)){
                if(LabelMT < 300){
                    LabelMT += 3;
                    label.style.marginTop = LabelMT +"px";
                }
            }
            if (window.innerWidth <= 426){
                if(LabelMT < 625){
                    LabelMT += 6.25;
                    label.style.marginTop = LabelMT +"px";
                }
            }
        }, 4);
        setTimeout(() => { clearInterval(timerId);
            if (window.innerWidth <= 768 && window.innerWidth > 426  || (window.innerWidth <= 800 && window.innerWidth >= 769 && window.innerHeight <= 426)){
                if(LabelMT != 300){
                    LabelMT = 300;
                    label.style.marginTop = LabelMT +"px";
                }
            }
            if (window.innerWidth <= 426){
                if(LabelMT != 625){
                    LabelMT = 625;
                    label.style.marginTop = LabelMT +"px";
                }

            }
            if(opa != 1){
                opa = 1;
                menu_visible.style.opacity = opa;
            }
        }, 400);
        if (window.innerWidth <= 768 && window.innerWidth > 426  || (window.innerWidth <= 800 && window.innerWidth >= 769 && window.innerHeight <= 426)){
            menu_visible.style.width = "100%";
            menu_visible.style.height = "300px"
            menuH.style.textAlign="center";
            menuUlCont.style.display = "flex";
            menuUlCont.style.justifyContent = "space-around";
            for (let i=0;i<menu_list.length;i++){
                if(!menu_list.value){
                    menu_list[i].style.marginLeft = "0";
                    menu_list[i].style.textAlign = "center";
                }
            }
            for (let i=0;i<menu_h5.length;i++){
                if(!menu_h5.value){
                    menu_h5[i].style.marginLeft = "0";
                    menu_h5[i].style.textAlign = "center";
                }
            }
        }
        if (window.innerWidth <= 426){
            menu_visible.style.width = "100%";
            menu_visible.style.height = "625px"
            menuH.style.textAlign="center";
            for (let i=0;i<menu_list.length;i++){
                if(!menu_list.value){
                    menu_list[i].style.marginLeft = "0";
                    menu_list[i].style.textAlign = "center";
                }
            }
            for (let i=0;i<menu_h5.length;i++){
                if(!menu_h5.value){
                    menu_h5[i].style.marginLeft = "0";
                    menu_h5[i].style.textAlign = "center";
                }
            }
        }
    }
    menu_close.onclick = function(){
        let timerId = setInterval(() => {opa -= 0.01; menu_visible.style.opacity = opa 
                if(LabelMT > 0){
                    LabelMT -= 3;
                    label.style.marginTop = LabelMT +"px";
            }
            if (window.innerWidth <= 426){
                if(LabelMT > 0){
                    LabelMT -= 6.25;
                    label.style.marginTop = LabelMT +"px";
                }
            }
        }, 4);
        setTimeout(() => { clearInterval(timerId);
            if(LabelMT > 0){
                LabelMT = 0;
                label.style.marginTop = LabelMT +"px";
            }
            if(opa != 0){
                opa = 0;
                menu_visible.style.opacity = opa;
            }
        }, 400);
        setTimeout(() => {menu_visible.style.display = "none";}, 400);
        if (window.innerWidth > 768 && window.innerWidth > 426  || (window.innerWidth > 800 && window.innerWidth < 769 && window.innerHeight > 426)){
            menu_visible.style.width = "232px";
            menu_visible.style.height = "764px"
            menuH.style.textAlign="left";
            menuUlCont.style.display = "block";
            menuUlCont.style.justifyContent = "none";
        }
    }
    head_but_4[0].onclick = function(){
        document.location.href = "registration.html"
    }
    head_but_4[1].onclick = function(){
        document.location.href = "registration.html"
    }
    head_but_5[0].onclick = function(){
        document.location.href = "cart.html"
    }
    head_but_5[1].onclick = function(){
        document.location.href = "cart.html"
    }
    head_but_1[0].onclick = function(){
        document.location.href = "index.html"
    }
});