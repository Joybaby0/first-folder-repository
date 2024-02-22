
let menu = [
    {
        img : "image1.jpg",
        category: "breakfast",
        price: "$200"
    },

    {
        img : "pizza.jpg",
        category: "lunch",
        price: "$200"
    },

    {
        img : "image4.jpg",
        category: "dinner",
        price: "$200"
    },

    {
        img : "image3.jpg",
        category: "lunch",
        price: "$200"
    },

    {
        img : "image2.jpg",
        category: "lunch",
        price: "$200"
    },

    {
        img : "pizza.jpg",
        category: "breakfast",
        price: "$200"
    },

    {
        img : "image2.jpg",
        category: "dinner",
        price: "$200"
    },

    {
        img : "pizza.jpg",
        category: "dinner",
        price: "$200"
    },

    {
        img : "image3.jpg",
        category: "lunch",
        price: "$200"
    },

    {
        img : "image4.jpg",
        category: "breakfast",
        price: "$200"
    },

]

let foodMenu = document.querySelector(".food-menu")
let menuBtn = document.querySelectorAll(".menu-btn")

window.addEventListener("DOMContentLoaded", function(){
    displayItem(menu)
})


menuBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let targett = e.currentTarget.dataset.id
        let menuItems = menu.filter(function(m){

            if(m.category === targett){
                return m
            }
        })
        if(targett === "all"){
            return displayItem(menu)
        }else{
            return displayItem(menuItems)
        }
    })
})




function displayItem(menuItem){
    let displayMenu = menuItem.map(function(item){

        return `<article>
        <img class="image" src=${item.img} alt="">
        <p class="menus">${item.category}</p>
        <p class="price">${item.price}</p>
    </article>`
    })

    displayMenu = displayMenu.join("")
    foodMenu.innerHTML = displayMenu
}