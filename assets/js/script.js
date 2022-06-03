let Country = document.querySelector (".Country");
let CountrySideBar = document.querySelector (".CountrySideBar");
let Currency = document.querySelector (".Currency");
let CurrencySideBar = document.querySelector (".CurrencySideBar");

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