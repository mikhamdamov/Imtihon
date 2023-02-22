let buy = document.querySelector(".Buy");
let Cheese = document.querySelector(".Cheese");
let Meat = document.querySelector(".Meat");
let Onion = document.querySelector(".Onion");
let Salad = document.querySelector(".Salad");
let Tomato = document.querySelector(".Tomato");
let Pickle = document.querySelector(".Pickle");
let total = document.querySelector(".total");
let im  = document.createElement('img')
im.classList.add('ig')
let img = document.querySelector('.ig')

Cheese.addEventListener("click" , () => {
         total.textContent =  +total.textContent + 2
           im.setAttribute("src" , "./BurgerTime/cheese.png ");
})
Meat.addEventListener("click" , () => {
         total.textContent = +total.textContent + 5
})
Onion.addEventListener("click", () => {
  total.textContent = +total.textContent + 1;
});
Salad.addEventListener("click", () => {
  total.textContent = +total.textContent + 1;
});
Tomato.addEventListener("click", () => {
  total.textContent = +total.textContent + 2;
});
Pickle.addEventListener("click", () => {
  total.textContent = +total.textContent + 3;
});


buy.addEventListener("click", () => {
    let a = Math.round(Math.random() * (35 - 10) + 10);
    alert(`To'lo'v Amalga Oshirildi Sizning Ochurtingiz ${a} `);

});
