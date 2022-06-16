let Main = document.querySelector ("#Main");
let Post1 = Main.firstElementChild.firstElementChild;
let Post2 = Main.firstElementChild.firstElementChild.nextElementSibling;
let Post3 = Main.firstElementChild.lastElementChild.previousElementSibling;
let Post4 = Main.firstElementChild.lastElementChild;

let Posts = Main.firstElementChild;

let Toggle = document.querySelector ("#Toggle");
let ButtonLeft = Toggle.firstElementChild.firstElementChild;
let Button1 = Toggle.firstElementChild.firstElementChild.nextElementSibling;
let Button2 = Toggle.firstElementChild.lastElementChild.previousElementSibling;
let ButtonRight = Toggle.firstElementChild.lastElementChild;

Button1.addEventListener ("click", function () {
    Post4.style.display = "none";
    Post1.style.display = "block";
    Post2.style.display = "block";
    Post3.style.display = "block";
    ButtonLeft.style.display = "none";
    ButtonRight.style.display = "block";
    Button1.style.backgroundColor = "#2BBEF9";
    Button1.style.color = "white";
    Button2.style.backgroundColor = "white";
    Button2.style.color = "#202435";
    Posts.style.height = "2760px";
})

Button2.addEventListener ("click", function () {
    Post4.style.display = "block";
    Post1.style.display = "none";
    Post2.style.display = "none";
    Post3.style.display = "none";
    ButtonRight.style.display = "none";
    ButtonLeft.style.display = "block";
    Button1.style.backgroundColor = "white";
    Button1.style.color = "#202435";
    Button2.style.backgroundColor = "#2BBEF9";
    Button2.style.color = "white";
    Posts.style.height = "fit-content";
})

ButtonLeft.addEventListener ("click", function () {
    Post4.style.display = "none";
    Post1.style.display = "block";
    Post2.style.display = "block";
    Post3.style.display = "block";
    ButtonLeft.style.display = "none";
    ButtonRight.style.display = "block";
    Button1.style.backgroundColor = "#2BBEF9";
    Button1.style.color = "white";
    Button2.style.backgroundColor = "white";
    Button2.style.color = "#202435";
    Posts.style.height = "2760px";
})

ButtonRight.addEventListener ("click", function () {
    Post4.style.display = "block";
    Post1.style.display = "none";
    Post2.style.display = "none";
    Post3.style.display = "none";
    ButtonRight.style.display = "none";
    ButtonLeft.style.display = "block";
    Button1.style.backgroundColor = "white";
    Button1.style.color = "#202435";
    Button2.style.backgroundColor = "#2BBEF9";
    Button2.style.color = "white";
    Posts.style.height = "fit-content";
})