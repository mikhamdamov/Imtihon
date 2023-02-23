let total = document.querySelector(".total");
let Cheese = document.querySelector(".Cheese");
let Meat = document.querySelector(".Meat");
let Onion = document.querySelector(".Onion");
let Salad = document.querySelector(".Salad");
let Tomato = document.querySelector(".Tomato");
let Pickle = document.querySelector(".Pickle");
let bottom = document.querySelector("#bottom");
let Buy = document.querySelector(".Buy");

Buy.addEventListener("click" , () => {
  alert(`Xaridingiz uchun rahmat sizning ochuritngiz${Math.floor(Math.random() * (35 - 10) + 10 )}`)
})

Cheese.addEventListener("click", () => {
  total.textContent = +total.textContent + 2;
  let ul = document.querySelector("ul");
  let li = document.createElement("li")
  let img = document.createElement("img");
  img.classList.add("immg")
  img.setAttribute("src", "./BurgerTime/cheese.png");
  let bottomB = document.querySelector("#bottom");
  ul.insertBefore(li , bottomB )
  li.prepend(img)
  img.addEventListener("click", () =>{
    img.classList.add("none")
    total.textContent = +total.textContent + -2;

  } )
});
Meat.addEventListener("click", () => {
  total.textContent = +total.textContent + 5;
  let ul = document.querySelector("ul");
  let li = document.createElement("li")
  let img = document.createElement("img");
  img.setAttribute("src", "./BurgerTime/meat.png");
  let bottomB = document.querySelector("#bottom");
  ul.insertBefore(li , bottomB )
  li.prepend(img)
  img.addEventListener("click", () => {
    img.classList.add("none");
    total.textContent = +total.textContent + -5;
  });
});
Onion.addEventListener("click", () => {
  total.textContent = +total.textContent + 1;
  let ul = document.querySelector("ul");
  let li = document.createElement("li")
  let img = document.createElement("img");
  img.setAttribute("src", "./BurgerTime/onion.png");
  let bottomB = document.querySelector("#bottom");
  ul.insertBefore(li , bottomB )
  li.prepend(img)
  img.addEventListener("click", () => {
    img.classList.add("none");
    total.textContent = +total.textContent + -1;
  });
});
Salad.addEventListener("click", () => {
  total.textContent = +total.textContent + 1;
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("src", "./BurgerTime/salad.png");
  let bottomB = document.querySelector("#bottom");
  ul.insertBefore(li, bottomB);
  li.prepend(img);
  img.addEventListener("click", () => {
    img.classList.add("none");
    total.textContent = +total.textContent + -1;
  });
});
Tomato.addEventListener("click", () => {
  total.textContent = +total.textContent + 2;
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("src", "./BurgerTime/tomato.png");
  let bottomB = document.querySelector("#bottom");
  ul.insertBefore(li, bottomB);
  li.prepend(img);
  img.addEventListener("click", () => {
    img.classList.add("none");
    total.textContent = +total.textContent + -2;
  });
});
Pickle.addEventListener("click", () => {
  total.textContent = +total.textContent + 3;
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("src", "./BurgerTime/pickle.png");
  let bottomB = document.querySelector("#bottom");
  ul.insertBefore(li, bottomB);
  li.prepend(img);
  img.addEventListener("click", () => {
    img.classList.add("none");
    total.textContent = +total.textContent + -3;
  });
});

