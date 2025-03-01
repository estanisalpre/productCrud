// Edit functionality
import { 
    inputs,
    globalBtns, 
    getInputValues, 
    globalContainers
} from "../arrays/Elements.js"

export function editProducts(){
    cancelEdit();

    const editBtns = document.querySelectorAll('.editBtn')
    
    if(editBtns){
        editBtns.forEach(function(btn){
            btn.addEventListener('click', () => {
                const btnId = btn.dataset.id 
                const productList = JSON.parse(localStorage.getItem('products')) || [];

                globalContainers.editModal.style.display = 'flex'

                const productName = productList[btnId].productName
                const price = parseInt(productList[btnId].price)
                const description = productList[btnId].description
                const imgUrl = productList[btnId].imgUrl

                inputs.newName.value = productName
                inputs.newPrice.value = price
                inputs.newDescription.value = description
                inputs.newImgUrl.value = imgUrl

                if(globalBtns.updateBtn){
                    globalBtns.updateBtn.addEventListener('click', () => {
                        update(productList, btnId);
                    })
                }
            })
        })
    }
}

function cancelEdit(){
    if(globalBtns.cancelBtn){
        globalBtns.cancelBtn.addEventListener('click', () => {
            globalContainers.editModal.style.display = 'none'
        })
    }
}

function update(list, id){
    const newName = getInputValues().newNameValue
    const newPrice = getInputValues().newPriceValue
    const newDescription = getInputValues().newDescriptionValue
    const newImgUrl = getInputValues().newImgUrlValue
    
    list[id].productName = newName
    list[id].price = newPrice
    list[id].description = newDescription
    list[id].imgUrl = newImgUrl


    localStorage.setItem('products', JSON.stringify(list))
    window.location.reload();
}