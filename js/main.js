const menuList = document.getElementById("mainList");
const secondList = document.getElementById("secondList");
const subtotal = document.getElementById("subtotal");
const elTax = document.getElementById("tax");
const elTotal = document.getElementById("total");


let newArr = [];
let total = 0;
let tax = 0;
let sum = 0;

arr.forEach((item) => {
  let li = document.createElement("li");
  li.className = "food-item";
  li.innerHTML = `
  <img class="food-img" src=${item.imgUrl} alt="pizza" />
  <div class=" ms-3">
    <p class="food-name">${item.name}</p>
    <span class="food-price">$${item.price}</span>
    <button class="food-btn" onclick="addItemArray(${item.id})">
      Add to Cart
    </button>
  </div>
  `;

  menuList.appendChild(li);
});

function addItemArray(listId) {
  newArr.push(arr.filter((item) => item.id === listId)[0]);
  addCart(newArr);
}

function addCart(cartPizzaArray) {
  let arr = cartPizzaArray;
  let topArr = [];

  arr.forEach(() => {
    if (arr != "") topArr.push(arr[0]);
    arr = arr.filter((el) => {
      return arr[0].id != el.id;
    });
  });

  let li = 0;
  let listArr = [];
  total = 0;
  tax = 0;
  sum = 0;

  topArr.forEach((item) => {
    let count = cartPizzaArray.filter((element) => {
      return element.id == item.id;
    });
    li = `
    <li class="food-item">
      <img class="food-img" src=${item.imgUrl} alt="pizza" />
      <div class="ms-3">
        <p class="food-name">${item.name}</p>
        <span id="total" class="count">
          ${count.length}
        </span>
        <span class="food-price">$${item.price}</span>
        <div class="btn-group">
          <span class="minus plus" onclick="addItemArray(${item.id})">+</span>
          <span class="minus" onclick="remove(${item.id})"><i class='bx bx-minus' style='color:#ffffff'  ></i></span>
        </div>
      </div>
    </li>
    `;

    listArr.push(li);
    secondList.innerHTML = listArr.join("");
  });

  cartPizzaArray.forEach((item) => {
    total += item.price;
    tax = total * 10 / 100;
    sum = total+tax;
  });

  subtotal.innerHTML = `<p>Subtotal: $${total.toFixed(2)} </p>`;
  elTax.innerHTML = `<p>Tax: $${tax.toFixed(2)} </p>`;
  elTotal.innerHTML = `<p>Total: $${sum.toFixed(2)} </p>`;

  
}

function remove(elId) {
  let count = 0;
  let a = [];

  newArr.forEach((element) => {
    if (element.id === elId && count === 0) {
      count++;
    } else {
      a.push(element);
    }
  });

  newArr = a;
  if (newArr.length === 0) {
    secondList.innerHTML = "";
  }
  addCart(newArr);
}



