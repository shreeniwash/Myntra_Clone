const CONVIENCES_FEE=99;
let bagItemsObjects=[];
onload();
function onload(){
    loadBagItemsObject();
    displayBagItems();
     displayBagSummary();
    
}

 function displayBagSummary(){
    let bagSummary=document.querySelector('.bag-summary');

    let totalItems=bagItemsObjects.length;
    let totalMRP=0;
    let totalDiscount=0;
     
    bagItemsObjects.forEach(bagItem=>{
        totalMRP+=bagItem.original_price;
        totalDiscount+=bagItem.original_price-bagItem.current_price;
        
    });
    let finalPayment=totalMRP-totalDiscount+CONVIENCES_FEE;


    bagSummary.innerHTML=`<div class="bag-details-container">
                <div class="price-header">PRICE DETAILS (${totalItems} items)</div>
                <div class="price-item">
                 <span class="price-item-tag">Total MRP</span>
                 <span class="price-item-value">₹ ${totalMRP}</span>
                </div>
                <div class="price-item">
                 <span class="price-item-tag">Discount on MRP</span>
                 <span class="price-item-value priceDetail-base-discount">-₹ ${totalDiscount}</span>
                </div>
                <div class="price-item">
                 <span class="price-item-tag">Conviences Fee</span>
                 <span class="price-item-value">₹ 99</span>
                </div>
                <hr>
                <div class="price-footer">
                 <span class="price-item-tag">Total Amount</span>
                 <span class="price-item-value">₹ ${finalPayment}</span>
                </div>
            </div>
             <button class="btn-place-order">
                <div class="css-xjhrni">PLACE ORDER</div>
             </button>`;
 }

function loadBagItemsObject(){
    // console.log(BagItems);
  bagItemsObjects=BagItems.map(itemid =>{
        for(let i=0; i< items.length; i++){
            if(itemid==items[i].id){
               return items[i]; 
            }
        }
    })
    console.log(bagItemsObjects);

}


function displayBagItems(){
    let containerElement=document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemsObjects.forEach(bagitem=>{
        innerHTML+=generateHTML(bagitem)
    })
    containerElement.innerHTML=innerHTML;
}

function removeFromBag(itemId){
    BagItems=BagItems.filter(bagitemId=> bagitemId != itemId);
    localStorage.setItem('Bagitems',JSON.stringify(BagItems))
    loadBagItemsObject();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

function generateHTML(item){
 return ` <div class="bag-item-container">
                <div class="item-left-part">
                    <img class="bag-item-image" src="../${item.image}" alt="">
                </div>
                <div class="item-right-part">
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <div class="return-period">
                        <span class="return-period-days">${item.return_period} Days</span> 
                        return available
                    </div>
                    <div class="delivery-details">
                        Delivery by 
                        <span class="delivery-date">${item.delivery_date}</span>
                    </div>
                </div>
                <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
            </div>`;
}
