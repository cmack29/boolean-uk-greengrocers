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
    quantity: 2
  },
  {
    itemId: "002-carrot",
    quantity: 1
  },
  {
    itemId: "003-apple",
    quantity: 1
  },
  {
    itemId: "004-apricot",
    quantity: 1
  },
  {
    itemId: "005-avocado",
    quantity: 1
  },
  {
    itemId: "006-bananas",
    quantity: 1
  },
  {
    itemId: "007-bell-pepper",
    quantity: 1
  },
  {
    itemId: "008-berry",
    quantity: 1
  },
  {
    itemId: "009-blueberry",
    quantity: 1
  },
  {
    itemId: "010-eggplant",
    quantity: 1
  },
];

console.log(cartItems)

// create bridges
const storeItemList = document.querySelector(".store--item-list")

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

listItemEl.append(addToCartButton);

// console.log(addToCartButton)

storeItemList.append(listItemEl);

// console.log(storeItemList);

imageDiv.append(imageEl);

// console.log(listItemEl)
}

}

function addToCart(storeItem, cartItems) {

console.log("Inside addToCart: ", storeItem, cartItems)

const newCartItem = {
  item: storeItem,
  quantity: 2
};
cartItems.push(newCartItem);
console.log("New cart item:", cartItems)
}
// let foundItem = false;

// // storeItem needs to exist in cartItems, to extract the data

// for (let i = 0; i < cartItems.length; i++) {
//   const selectedItem = cartItems[i].itemId;
//   console.log("selecteditem: ", selectedItem);

//   let cartQuantity = cartItems[i].quantity;
//   console.log("Quantity: ", cartQuantity);

//   const selectedItemID = storeItems.id;
//   console.log("ID: ", selectedItemID);  

  
// }
  



// 2.0 call the function
// 2.1 Give the function an argument
// 2.2 check if its correct with console.log
renderStoreItems(storeItems);

