let arr = [
   {
    img: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png',
    text: 'Peperoni',
    price: 1,
    id: 1
  },
   {
    img: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg',
    text: 'Cheesy',
    price: 2,
    id: 2
  },
  {
    img: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg',
    text: 'Margarita',
    price: 3,
    id: 3
  },
  {
    img: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg',
    text: 'Margarita',
    price: 4,
    id: 4
  }
]

let elList = document.getElementById('mainList');
const tax = document.getElementById('tax');
const total = document.getElementById('total');
const subtotal = document.getElementById('subtotal');


for (let i = 0; i < arr.length; i++){
    let element = document.createElement('li');
    element.className = 'food-item animate__animated animate__bounceIn'
      element.innerHTML = `
      <img class="food-img" src="${arr[i].img}" alt="pizza">
      <div class="ms-3">
      <p class="food-name m-0">${arr[i].text}</p>
      <p class="food-price mt-2">$${arr[i].price}</p>
      <button class="food-btn" onclick = 'addItem(${arr[i].id})'>Add to Card</button>
    </div>
      `;
    elList.append(element);
}

let secondList = document.getElementById('secondList');

let sub = 0;
let taxx = 0;
let totalsum = 0;
let newPizzaArr = [];

function addItem(id){
  for (let i = 0; i < arr.length; i++){
    if (id == arr[i].id){
      newPizzaArr.push(arr[i]);

    }
}
  for (let i = 0; i < newPizzaArr.length; i++){
    if (i == newPizzaArr.length-1){
        let element = document.createElement('li');
        element.className = 'food-item animate__animated animate__bounceIn'
        element.innerHTML = `
        <img class="food-img" src="${newPizzaArr[i].img}" alt="pizza">
        <div class="ms-3">
        <p class="food-name m-0">${newPizzaArr[i].text}</p>
        <p class="food-price mt-2">$${newPizzaArr[i].price}</p>
        <span class="minus del remove" onclick='removeItem(${i})'><i class='bx bx-minus' style='color:#ffffff'></i></span>
      </div>
        `;
  
        sub += newPizzaArr[i].price;
        taxx = sub * 10 / 100;
        totalsum = sub + taxx;
        subtotal.innerHTML = `<p> Subtotal: $${sub.toFixed(2)} </p>`;
        tax.innerHTML = `<p> Tax: $${taxx.toFixed(2)} </p>`;
        total.innerHTML = `<p> Total: $${totalsum.toFixed(2)} </p>`;


        secondList.append(element);
    }
}
}

  // REMOVING ITEMS
 


function removeItem(index){
  let newArrRemove = [];

    for (let i = 0; i < newPizzaArr.length; i++){
      if (index != i){
       newArrRemove.push(newPizzaArr[i]);
      }
    }

    newPizzaArr = newArrRemove;
    
    secondList.innerHTML = '';
    sub = 0;
    taxx = 0;
    totalsum = 0;
    
    
    for (let i = 0; i < newPizzaArr.length; i++){
      
      let element = document.createElement('li');
      element.className = 'food-item ';
      element.innerHTML = `
      <img class="food-img" src="${newPizzaArr[i].img}" alt="pizza">
      <div class="ms-3">
      <p class="food-name m-0">${newPizzaArr[i].text}</p>
      <p class="food-price mt-2">$${newPizzaArr[i].price}</p>
      <span class="minus del remove" onclick="removeItem(${i})"><i class='bx bx-minus' style='color:#ffffff'></i></span>
    </div>
      `;

     sub += newPizzaArr[i].price;
     taxx = sub * 10 / 100;
     totalsum = sub + taxx;
    
     subtotal.innerHTML = `<p> Subtotal: $${sub.toFixed(2)} </p>`;
     tax.innerHTML = `<p> Tax: $${taxx.toFixed(2)} </p>`;
     total.innerHTML = `<p> Total: $${totalsum.toFixed(2)} </p>`;

     secondList.appendChild(element);
    }
    if (newPizzaArr.length == 0){
      sub = 0;
      taxx = 0;
      subtotal.innerHTML = `<p> Subtotal: $${sub.toFixed(2)} </p>`;
      tax.innerHTML = `<p> Tax: $${taxx.toFixed(2)} </p>`;
      total.innerHTML = `<p> Total: $${totalsum.toFixed(2)} </p>`;
    }
  }

