// JS tuong tac va xu ly cac su kien voi cac phan tu HTML
// DOM - tim ra cac phan HTML
// 1 - tim phan tu HTML theo id
let button = document.getElementById("btnClick");
console.log(button);
// 2 - tim phan tu HTML theo class
let btn = document.getElementsByClassName("btn");
console.log(btn[0]);
// 3 - tim phan tu HTML theo ten the
let btn1 = document.getElementsByTagName("button");
console.log(btn1[0]);
let h1 = document.getElementsByTagName("h1");
console.log(h1[0].innerHTML); // JS - DOM
console.log(h1[1].innerHTML); // Hello Word !
///////////// Bat su kien ////////////
button.onclick = function(){
    alert("Hi you !");
    h1[1].innerHTML = "Say Good bye";
    // h1[0].innerHTML = "";

    // h1[0].style = "color: yellow; font-weight: bold; font-size: 30px";

    h1[0].style.color = "yellow";
    h1[0].style.fontWeight = "bold";
    h1[0].style.fontSize = "300px";
}
let login = document.getElementById("btnLogin");
// bat su kien
login.addEventListener("click", function(){
    alert("login system");
});
function registerAccount(){
    let username = document.getElementById("username");
    let value = username.value.trim();// lay gia tri ma nguoi dung nhap vao input
    console.log(value);
    if(value.length === 0){
        username.style.border = "solid red 2px";
    } else {
        username.style.border = "";
    }
}