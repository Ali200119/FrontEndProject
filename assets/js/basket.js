let AddButtons = document.querySelectorAll ("#AddButton");
let ProductCount = document.querySelector ("nav").firstElementChild.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;


AddButtons.forEach(item => {
    item.onclick = function (event) {
        event.preventDefault();

        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let array = JSON.parse(localStorage.getItem("basket"));
        
        let ProductId = this.parentElement.getAttribute ("data-id");

        let existProduct = array.find(p=>p.id==ProductId);

        if (existProduct == undefined) {
            array.push({
                id: ProductId,
                imageURL: this.parentElement.firstElementChild.firstElementChild.lastElementChild.getAttribute ("src"),
                name: this.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText,
                price: this.previousElementSibling.lastElementChild.innerText,
                count: 1
            })
        }

        else {
            existProduct.count++;
        }

        localStorage.setItem("basket", JSON.stringify(array));

        WriteProductCount ();
    }
});

function WriteProductCount () {
    if (localStorage.getItem("basket") != null) {
        let array = JSON.parse(localStorage.getItem("basket"));
        
        let TotalCount = 0;
        array.map(product=>{
            TotalCount += product.count;
        });

        ProductCount.innerText = TotalCount;
    }
}

WriteProductCount ();