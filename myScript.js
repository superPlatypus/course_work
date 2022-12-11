const cards = document.querySelectorAll(".videocard")

cards.forEach((el, idx) => {
    console.dir(el)
   const btn = el.childNodes[3].childNodes[3].childNodes[3]
   const title = el.childNodes[3].childNodes[1].childNodes[1].innerText
   const price = el.childNodes[3].childNodes[3].childNodes[1].childNodes[1].innerText
    const img = el.childNodes[1].style.backgroundImage
    console.log(img)
    btn.addEventListener("click", ()=> {
        const cartStorage = localStorage.getItem("cart") || "[]"
        const cart = JSON.parse(cartStorage)
        const card = {title, price, img}
        console.log(card)
        localStorage.setItem("cart", JSON.stringify(([...cart, card])))
    })
})
