
function CollectNewProductPrice(ProductPriceField){
    const newProductPrice = document.getElementById(ProductPriceField);
    const newProductPriceString = newProductPrice.innerText;
    const newProductPriceValue = parseFloat(newProductPriceString);
    return newProductPriceValue;
}
function setProductName(setProductName,productName){
    const parentNode = document.getElementById(setProductName);
    const h4 = document.createElement("h4");
    const count = parentNode.childElementCount;
    h4.innerText = `${count+1}. ${productName}`;
    parentNode.appendChild(h4);
}
function CollectProductName(name){
    const productTag = document.getElementById(name);
    const productName = productTag.innerText;
    return productName;
}
function setTotalValue(totalValue,newTotalPrice){
    const totalPriceValue = document.getElementById(totalValue);
    totalPriceValue.innerText = newTotalPrice;
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById("apply-coupon");
        applyButton.removeAttribute("disabled");
        const inputField = document.getElementById("Check-coupon");
        inputField.removeAttribute("disabled");
    }
    // console.log(newTotalPrice);

}
document.getElementById("apply-coupon").addEventListener("click",function(){
    const couponField =  document.getElementById("Check-coupon");
    const couponFieldValue = couponField.value;
    couponField.value = "";

    if(couponFieldValue === 'SELL200'){
        const totalPriceField = document.getElementById('price-field');
        const totalPrice = totalPriceField.innerText;
        const discountTotalPrice = (totalPrice * 20)/100;

        // take discount field previous value
        const discountField = document.getElementById("discount-field");
        const discountFieldValueString = discountField.innerText;
        const discountFieldValue = parseInt(discountFieldValueString);

        // set discount value at discount field
        const discountPrice = discountFieldValue + discountTotalPrice;
        discountField.innerText = discountPrice;

        // collect previous total paid price
        const previousTotalPriceField = document.getElementById("total-price");
        const previousTotalPriceString = previousTotalPriceField.innerText;
        const previousTotalPrice = parseInt(previousTotalPriceString);

        // set new total paid price
        const newTotalPrice = totalPrice - discountTotalPrice;
        const newTotalPaidPrice = previousTotalPrice + newTotalPrice;
        previousTotalPriceField.innerText = newTotalPaidPrice;

        if (newTotalPaidPrice > 0){
            const purchaseButton = document.getElementById("Buy_button");
            purchaseButton.removeAttribute("disabled");

            const applyBtn = document.getElementById("apply-coupon");
            applyBtn.setAttribute("disabled",true);
        }
        // console.log(totalPrice);
        // console.log(discountTotalPrice);
        // console.log(newTotalPaidPrice);
    }
})

document.getElementById("Buy_button").addEventListener("click",function(){
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    const span = document.getElementById("close");
    span.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
})

document.getElementById("Kitchenware-Accessories1").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Kitchenware-price1");

    // collect previous Product Price 
    const PreviousPriceFieldValue =CollectNewProductPrice("price-field");

    // set total value
    const newTotalPriceField = PreviousPriceFieldValue + newProductPriceValue;
    setTotalValue("price-field",newTotalPriceField);

    // Collect Product Name
    const productName = CollectProductName("K-Name1");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPriceField);
});
document.getElementById("Kitchenware-Accessories2").addEventListener("click", function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Kitchenware-price2");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("K-Name2");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Kitchenware-Accessories3").addEventListener("click", function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Kitchenware-price3");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("K-Name3");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Sportswear-Accessories1").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Sportswear-price1");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("S-Name1");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Sportswear-Accessories2").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Sportswear-price2");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("S-Name2");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Sportswear-Accessories3").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Sportswear-price3");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("S-Name3");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Furniture-Accessories1").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Furniture-price1");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("F-Name1");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Furniture-Accessories2").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Furniture-price2");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("F-Name2");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});
document.getElementById("Furniture-Accessories3").addEventListener("click",function(){
    // Collect new product price
    const newProductPriceValue = CollectNewProductPrice("Furniture-price3");

    // collect previous price
    const previousPriceFieldValue = CollectNewProductPrice("price-field");

    // set total value
    const newTotalPrice = newProductPriceValue + previousPriceFieldValue;
    setTotalValue("price-field",newTotalPrice);

    // collect product name 
    const productName = CollectProductName("F-Name3");

    // set product Name 
    setProductName("add-productName",productName);

    // console.log("Connected",newTotalPrice);
});