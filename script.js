

let BagItems=[];
onLoad();


function onLoad(){
  let BagItemsStr=localStorage.getItem('Bagitems');
  BagItems=BagItemsStr?JSON.parse(BagItemsStr): [];
    displayBagIcon();
    displayItemOnHomepage();
   // localStorage.setItem('Bagitems',BagItems)
}

function addtoBag(itemid){
 BagItems.push(itemid);
 localStorage.setItem('Bagitems',JSON.stringify(BagItems))
 displayBagIcon();
}



function displayBagIcon(){
    let bagItemElement=document.querySelector('.bag-item-count');
    if(BagItems.length>0){
        bagItemElement.style.visibility='visible';
        bagItemElement.innerText=BagItems.length;
    }else{
        bagItemElement.style.visibility='hidden';
    }
}
function displayItemOnHomepage(){
let itemContainerElement=document.querySelector(".items-container");
let innerHtml='';
items.forEach(item=>{
    innerHtml+=` <div class="item-container">
                    <img class="item-image" src="${item.image}" alt="">
                    <div class="rating">
                        ${item.rating.stars} ⭐ |  ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="pricing">
                        <span class="current-price">${item.current_price}</span>
                        <span class="original-price">${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onClick= addtoBag(${item.id})>Add to Bag</button>
                </div>`
})
itemContainerElement.innerHTML=innerHtml;
}












// let BagItems = []; // Initialize BagItems globally as an array

// onLoad();

// function onLoad() {
//     // Get BagItems from localStorage and parse it
//     let BagItemsStr = localStorage.getItem('Bagitems');
//     BagItems = BagItemsStr ? JSON.parse(BagItemsStr) : [];
    
//     // Display the BagIcon and items on homepage
//     displayBagIcon();
//     displayItemOnHomepage();
// }

// function addtoBag(itemid) {
//     // Add itemid to BagItems and update localStorage
//     BagItems.push(itemid);
//     localStorage.setItem('Bagitems', JSON.stringify(BagItems));
    
//     // Update the BagIcon display
//     displayBagIcon();
// }

// function displayBagIcon() {
//     let bagItemElement = document.querySelector('.bag-item-count');
//     if (BagItems.length > 0) {
//         bagItemElement.style.visibility = 'visible';
//         bagItemElement.innerText = BagItems.length;
//     } else {
//         bagItemElement.style.visibility = 'hidden';
//     }
// }

// function displayItemOnHomepage() {
//     let itemContainerElement = document.querySelector(".items-container");
//     let innerHtml = '';
    
//     // Ensure 'items' is defined and is an array of item objects
//     items.forEach(item => {
//         innerHtml += `
//             <div class="item-container">
//                 <img class="item-image" src="${item.image}" alt="">
//                 <div class="rating">
//                     ${item.rating.stars} ⭐ | ${item.rating.count}
//                 </div>
//                 <div class="company-name">${item.company}</div>
//                 <div class="item-name">${item.item_name}</div>
//                 <div class="pricing">
//                     <span class="current-price">${item.current_price}</span>
//                     <span class="original-price">${item.original_price}</span>
//                     <span class="discount">(${item.discount_percentage}% OFF)</span>
//                 </div>
//                 <button class="btn-add-bag" onClick="addtoBag(${item.id})">Add to Bag</button>
//             </div>`;
//     });
    
//     itemContainerElement.innerHTML = innerHtml;
// }












