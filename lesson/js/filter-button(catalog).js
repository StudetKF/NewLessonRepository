window.addEventListener('DOMContentLoaded',function(){
    let button_menu = document.getElementById("filter-but");
    let menu_visible = document.getElementById("filter-menu");
    let button_open_menu = document.getElementById("filter-open")
    let open_menu_inside = document.getElementsByClassName("text-open-filter");
    let open_inside = document.getElementsByClassName("filter-category-open");
    let slide_cont = document.getElementById("catalog");
    let opa = 0;
    let choose;
    let slide = 0;
    button_menu.onclick = function(){
            let timerId = setInterval(() => {
                menu_visible.style.display = "flex";
                opa += 0.01; 
                menu_visible.style.opacity = opa;
            }, 4);
            setTimeout(() => { clearInterval(timerId);
                if(opa != 1){
                    opa = 1;
                    menu_visible.style.opacity = opa;
                }
            }, 400);
                open_menu_inside[0].style.color = "#EF5B70";
                open_inside[0].style.display="block"
                choose=1;
    }
    button_open_menu.onclick = function(){
        let timerId = setInterval(() => {
            opa -= 0.01; 
            menu_visible.style.opacity = opa;
        }, 4);
        setTimeout(() => { clearInterval(timerId);
            if(opa != 0){
                opa = 0;
                menu_visible.style.opacity = opa;
            }
        }, 400);
        setTimeout(() => {menu_visible.style.display = "none";}, 400);
    }
    open_menu_inside[0].onclick = function(){
        if(choose==0){
            open_menu_inside[0].style.color = "#EF5B70";
            open_menu_inside[1].style.color = "#6F6E6E";
            open_menu_inside[2].style.color = "#6F6E6E";
            open_inside[0].style.display="block"
            choose=1;
        }
        else{
            open_inside[0].style.display="none"
            choose=0;
            open_menu_inside[0].style.color = "#6F6E6E";
        }
    }
    open_menu_inside[1].onclick = function(){
        if(choose==0){
            open_menu_inside[1].style.color = "#EF5B70";
            open_menu_inside[0].style.color = "#6F6E6E";
            open_menu_inside[2].style.color = "#6F6E6E";
            open_inside[0].style.display="block"
            choose=1;
        }
        else{
            open_inside[0].style.display="none"
            choose=0;
            open_menu_inside[1].style.color = "#6F6E6E";
        }
    }
    open_menu_inside[2].onclick = function(){
        if(choose==0){
            open_menu_inside[2].style.color = "#EF5B70";
            open_menu_inside[0].style.color = "#6F6E6E";
            open_menu_inside[1].style.color = "#6F6E6E";
            open_inside[0].style.display="block"
            choose=1;
        }
        else{
            open_inside[0].style.display="none"
            choose=0;
            open_menu_inside[2].style.color = "#6F6E6E";
        }
    }
});