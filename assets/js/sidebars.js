/* ---------- Country SideBar Start ---------- */

let Country = document.querySelector (".Country");
let CountrySideBar = document.querySelector (".CountrySideBar");


Country.addEventListener ("mouseover", function () {
    CountrySideBar.style.display = "block"
})

Country.addEventListener ("mouseleave", function () {
    CountrySideBar.style.display = "none";
})

CountrySideBar.addEventListener ("mouseover", function () {
    CountrySideBar.style.display = "block";
})

CountrySideBar.addEventListener ("mouseleave", function () {
    CountrySideBar.style.display = "none";
})

/* ---------- Country SideBar End ---------- */



/* ---------- Currency SideBar Start ---------- */

let Currency = document.querySelector (".Currency");
let CurrencySideBar = document.querySelector (".CurrencySideBar");


Currency.addEventListener ("mouseover", function () {
    CurrencySideBar.style.display = "block"
})

Currency.addEventListener ("mouseleave", function () {
    CurrencySideBar.style.display = "none";
})

CurrencySideBar.addEventListener ("mouseover", function () {
    CurrencySideBar.style.display = "block";
})

CurrencySideBar.addEventListener ("mouseleave", function () {
    CurrencySideBar.style.display = "none";
})

/* ---------- Currency SideBar End ---------- */



/* ---------- Categories SideBar Start ---------- */

let Categories = document.querySelector (".Categories");
let CategoriesTotal = document.querySelector (".Categories").nextElementSibling;
let CategoriesBar = document.querySelector (".CategoriesBar");
let CategoriesBarFirstLi = document.querySelector (".CategoriesBar").firstElementChild.firstElementChild;
let CategoriesBarSecondLi = document.querySelector (".CategoriesBar").firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
let CategoriesUL3 = document.querySelector (".CategoriesBar").lastElementChild.previousElementSibling;
let CategoriesUL4 = document.querySelector (".CategoriesBar").lastElementChild;


Categories.addEventListener ("click", function () {
    if (CategoriesBar.style.display == "block") {
        CategoriesBar.style.display = "none";
    }
    
    else {
        CategoriesBar.style.display = "block";
    }
})

CategoriesTotal.addEventListener ("click", function () {
    if (CategoriesBar.style.display == "block") {
        CategoriesBar.style.display = "none";
    }
    
    else {
        CategoriesBar.style.display = "block";
    }
})

CategoriesBarFirstLi.addEventListener ("mouseover", function () {
    CategoriesUL3.style.display = "block";
})

CategoriesUL3.addEventListener ("mouseover", function () {
    CategoriesUL3.style.display = "block";
})

CategoriesBarFirstLi.addEventListener ("mouseleave", function () {
    CategoriesUL3.style.display = "none";
})

CategoriesUL3.addEventListener ("mouseleave", function () {
    CategoriesUL3.style.display = "none";
})

CategoriesBarSecondLi.addEventListener ("mouseover", function () {
    CategoriesUL4.style.display = "block";
})

CategoriesUL4.addEventListener ("mouseover", function () {
    CategoriesUL4.style.display = "block";
})

CategoriesBarSecondLi.addEventListener ("mouseleave", function () {
    CategoriesUL4.style.display = "none";
})

CategoriesUL4.addEventListener ("mouseleave", function () {
    CategoriesUL4.style.display = "none";
})

/* ---------- Categories SideBar End ---------- */



/* ---------- Home SideBar Start ---------- */

let Home = document.querySelector (".Part3").firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild;
let HomeBar = document.querySelector (".HomeBar");



Home.addEventListener ("mouseover", function () {
    HomeBar.style.display = "block";
})

Home.addEventListener ("mouseleave", function () {
    HomeBar.style.display = "none";
})

HomeBar.addEventListener ("mouseover", function () {
    HomeBar.style.display = "block";
})

HomeBar.addEventListener ("mouseleave", function () {
    HomeBar.style.display = "none";
})

/* ---------- Home SideBar End ---------- */