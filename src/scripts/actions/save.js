// Save Button Functionality
import { getInputValues, globalBtns } from "../arrays/Elements.js";
import { Product } from "../arrays/Product.js";
import { validation } from "../utils/formValidation.js";

export function saveProducts(){
    if (globalBtns.saveBtn){
        globalBtns.saveBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const validateForm = validation();

            if(validateForm == 1){
                const productList = JSON.parse(localStorage.getItem('products')) || [];

                Product.productName = getInputValues().productNameValue
                Product.price = getInputValues().priceValue
                Product.description = getInputValues().descriptionValue
                Product.imgUrl = getInputValues().imgUrlValue

                productList.push(Product)
        
                localStorage.setItem('products', JSON.stringify(productList))

                window.location.reload();
            } else {
                alert('Algo ha ocurrido.')
            }
        })
    }
}