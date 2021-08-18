window.onload = function(){
    let button_menu = document.getElementById("menu-but");
    let menu_visible = document.getElementById("menu");
    let menu_close = document.getElementById("menu-close");
    let label = document.getElementById("label");
    let menu = document.getElementById("menu");
    let menuH = document.getElementById("menu-h");
    let menuUlCont = document.getElementById("menu-ul-cont");
    let opa = 0;
    let LabelMT = 0;
    let menu_list = document.getElementsByClassName("menu-li");
    let menu_h5 = document.getElementsByClassName("menu-h5")
    button_menu.onclick = function(){
        let timerId = setInterval(() => {
            opa += 0.01; 
            menu_visible.style.opacity = opa;
            if (window.innerWidth <= 768 && window.innerWidth > 426 || (window.innerWidth <= 1920 && window.innerWidth >= 769 && window.innerHeight <= 426)){
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
            if (window.innerWidth <= 768 && window.innerWidth > 426  || (window.innerWidth <= 1920 && window.innerWidth >= 769 && window.innerHeight <= 426)){
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
        if (window.innerWidth <= 768 && window.innerWidth > 426  || (window.innerWidth <= 1920 && window.innerWidth >= 769 && window.innerHeight <= 426)){
            menu.style.width = "100%";
            menu.style.height = "300px"
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
            menu.style.width = "100%";
            menu.style.height = "625px"
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
        if (window.innerWidth > 768 && window.innerWidth > 426  || (window.innerWidth > 1920 && window.innerWidth < 769 && window.innerHeight > 426)){
            menu.style.width = "232px";
            menu.style.height = "764px"
            menuH.style.textAlign="left";
            menuUlCont.style.display = "block";
            menuUlCont.style.justifyContent = "none";
        }
    }
}