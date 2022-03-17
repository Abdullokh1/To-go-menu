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
let zero = 0;

for (let i = 0; i < arr.length; i++){
    let element = document.createElement('li');
      element.innerHTML = `
      <li class="food-item">
      <img class="food-img" src="${arr[i].img}" alt="pizza">
      <div class="ms-3">
      <p class="food-name m-0">${arr[i].text}</p>
      <p class="food-price mt-2">$${arr[i].price}</p>
      <button class="food-btn">Add to Card</button>
    </div>
      </li>
      `;
    elList.append(element);
}


let secondList = document.getElementById('secondList');
const AddBtn = document.querySelectorAll('.food-btn');
const subtotal = document.getElementById('subtotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');


for (let i = 0; i < AddBtn.length; i++){
  AddBtn[i].addEventListener('click', () =>{
    let element = document.createElement('li');
    element.innerHTML = `
    <li class="food-item animate__animated animate__bounceIn">
    <img class="food-img" src="${arr[i].img}" alt="pizza">
    <div class="ms-3">
    <p class="food-name m-0">${arr[i].text}</p>
    <p class="food-price mt-2">$${arr[i].price}</p>
    <span class="minus del"><i class='bx bx-minus' style='color:#ffffff'></i></span>
  </div>
    </li>
    `;
  secondList.append(element);



  // REMOVING ITEMS


 let removeBtn = document.querySelectorAll('.del');

  for (let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', (e) =>{
      e.target.parentNode.parentNode.parentNode.remove()
    })
  }

  //  ADDING TOTAL SUM 

  let sum = zero += arr[i].price;
  subtotal.innerHTML = `<p> Subtotal: $ ${sum.toFixed(2)}`;
  let tax1 = sum * 10 / 100;
  tax.innerHTML = `<p> Tax: $ ${tax1.toFixed(2)} </p>`;
  let totalsum = sum + tax1;
  total.innerHTML = `<p> Total: $ ${totalsum.toFixed(2)} </p>`;

  for (let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', (e) =>{
  
      sum -= arr[i].price;
      subtotal.innerHTML = `<p> Subtotal: $ ${sum.toFixed(2)}`;
      let tax1 =  sum * 10 / 100;
      tax.innerHTML = `<p> Tax: $ ${tax1.toFixed(2)} </p>`;
      let totalsum = sum + tax1;
      total.innerHTML = `<p> Total: $ ${totalsum.toFixed(2)} </p>`;
  
    })
  }
})
}
