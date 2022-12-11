const cart = document.querySelector(".cart_wrapper")
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")
if (cartStorage.length){
    cartStorage.forEach(el =>{
        const {title, price, img} = el
        const newcard = document.createElement("div")
        newcard.innerHTML = `<div class="cart_item cart_item_image"></div>
                <div class="cart_item">
                    <a class="cart_item_name">${title}</a>
                </div>
                <div class="cart_item">
                    <a class="cart_item_price">${price}</a>
                </div>
                <div class="cart_item">
                    <button class="cart_item_delete">Удалить</button>
                </div>`
        newcard.className = "cart_row"
        newcard.children[0].style.backgroundImage = img
        cart.appendChild(newcard)
    })
    const cards = document.querySelectorAll(".cart_row")
    cards.forEach((el,idx) => {
        const btn = el.childNodes[6].childNodes[1]
        const title = el.childNodes[2].childNodes[1].innerText
        btn.addEventListener("click", ()=> {
            var items = JSON.parse(localStorage.getItem("cart"))
            var i = 0
            JSON.parse(localStorage.getItem("cart")).every( (item) => {
                if (item['title'] == title) {
                    items.splice(i,1)
                    console.log(items)
                    return false;
                } else {
                    i++
                    return true;
                }
            });

            localStorage.setItem("cart", JSON.stringify(([...items])))
            location.reload();
        })
    })
}
else{
    const newcard = document.createElement("div")
    newcard.innerHTML = `<div>Корзина пуста</div>`
    newcard.className = "empty_cart"
    cart.appendChild(newcard)
}

