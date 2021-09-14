window.onload = function(){
    document.forms.temp.onsubmit = function() {
        let message = this.message.value;
        alert(9 / 5 * message + 32);
        return false;
    };
    let admin;
    let name = "Василий";
    admin = name;
    console.log(admin);
    //Можно и через alert
    //alert(admin);
    // 1000 + "108" = 1000108
}