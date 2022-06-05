let Country = document.querySelector (".Country");
let CountrySideBar = document.querySelector (".CountrySideBar");
let Currency = document.querySelector (".Currency");
let CurrencySideBar = document.querySelector (".CurrencySideBar");
let Search = document.querySelector (".Search").firstElementChild;


/* ---------- Country SideBar Start ---------- */

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

// Home.addEventListener ("click", function () {
//     if (HomeBar.style.display == "none") {
//         HomeBar.style.display = "block";
//     }

//     else {
//         HomeBar.style.display = "none";
//     }
// })