/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}
*/
const storeItems = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.45
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.45
  },
  {
    id: "004-apricot",
    name: "apple",
    price: 0.45
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.45
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.45
  },
  {
    id: "007-bell-pepper",
    name: "bell pepper",
    price: 0.45
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.45
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.45
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.45
  }
];

const cartItems = [
  {
    itemId: "001-beetroot",
    quantity: 0
  },
  {
    itemId: "002-carrot",
    quantity: 0
  },
  {
    itemId: "003-apple",
    quantity: 0
  },
  {
    itemId: "004-apricot",
    quantity: 0
  },
  {
    itemId: "005-avocado",
    quantity: 0
  },
  {
    itemId: "006-bananas",
    quantity: 0
  },
  {
    itemId: "007-bell-pepper",
    quantity: 0
  },
  {
    itemId: "008-berry",
    quantity: 0
  },
  {
    itemId: "009-blueberry",
    quantity: 0
  },
  {
    itemId: "010-eggplant",
    quantity: 0
  },
];

console.log(cartItems)

// create bridges
const storeItemList = document.querySelector(".store--item-list");
const cartItemListEl = document.querySelector(".cart--item-list");
// console.log(cartItems)

{/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li>

 */}

// process;
// 1.0 write the function
// 1.1 write the console.log
// 1.2 write the parameter


function renderStoreItems(storeItems) {
  // console.log("Inside renderStoreItems: ", storeItems);

// 3.1 If data is Array, use for loop
// 3.2 If data is object use dot notation
for (let i = 0; i < storeItems.length; i++){
// 4.0 check psuedo code to find out whats next
// 4.1 check every step with console.log

const storeItem = storeItems[i];

const listItemEl = document.createElement('li');


// start to html image
console.log(storeItem);

const imageDiv = document.createElement('div')

listItemEl.append(imageDiv);

const imageEl = document.createElement('img');
imageEl.src = `assets/icons/${storeItem.id}.svg`;
// console.log(`assets/icons/${storeItem.id}.svg`);

// console.log(imageEl);
// End to image html


const addToCartButton = document.createElement("button");
addToCartButton.innerText = "Add To Cart";

addToCartButton.addEventListener("click", (event) => {
  addToCart(storeItem, cartItems);

  console.log("After the click: ", cartItems)
})

listItemEl.append(addToCartButton);

// console.log(addToCartButton)

storeItemList.append(listItemEl);

// console.log(storeItemList);

imageDiv.append(imageEl);

// console.log(listItemEl)
}

}

function addToCart(storeItem, cartItems) {

// console.log("Inside addToCart: ", storeItem, cartItems)

let foundItem = false;

for (let i = 0; i < cartItems.length; i++) {
  const cartItem = cartItems[i];
  // console.log("inside loop: ", storeItems, cartItem)


if (storeItem.id === cartItem.itemId) {
  cartItem.quantity = cartItem.quantity + 1;

  foundItem = true;
    }
}

if (!foundItem){
const newCartItem = {
  item: storeItem,
  quantity: 1
};

cartItems.push(newCartItem);

return addToCart;
    }
};

function renderCartItems(cartItems) {
  console.log("Inside renderCartItems: ", cartItems);

  cartItemListEl.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i]
    const item = cartItem.itemId

    const listItemEl = document.createElement("li");

    const imageEl = document.createElement("img");
    imageEl.className = "cart--item-icon";
    imageEl.src = `assets/icons/${item}.svg`;
    
    listItemEl.append(imageEl);

    const paragraphEL = document.createElement("p");
    paragraphEL.innerHTML = item;

    listItemEl.append(paragraphEL);

    cartItemListEl.append(listItemEl);

    const removeButton = document.createElement("button");
    removeButton.className = "quantity-btn remove-btn center";
    removeButton.innerText = "-";

    listItemEl.append(removeButton);

    const quantitySpanEl = document.createElement("span");
    quantitySpanEl.innerText = cartItem.quantity;

    listItemEl.append(quantitySpanEl);

    const addButton = document.createElement("button");
    addButton.className = "quantity-btn add-btn center";
    addButton.innerText = "+";

    listItemEl.append(addButton);

    cartItemListEl.append(listItemEl);

    addButton.addEventListener("click", () => {
      console.log("Item onClick: ", item);
      addToCart(item, cartItem);
      renderCartItems(cartItems);
    });

    
  }
  
}

renderCartItems(cartItems)
// console.log("New cart item:", cartItems)

// const beetroot = storeItems[0]
// const carrot = storeItems[1]
// const apple = storeItems[2]
// const apricot = storeItems[3]
// const avocado = storeItems[4]
// const bananas = storeItems[5]
// const bellpeppers = storeItems[6]
// const berry = storeItems[7]
// const blueberry = storeItems[8]
// const eggplant = storeItems[9]

// addToCart(beetroot, cartItems);
// addToCart(carrot, cartItems);

// console.log(addToCart);
  
// 2.0 call the function
// 2.1 Give the function an argument
// 2.2 check if its correct with console.log
renderStoreItems(storeItems);

