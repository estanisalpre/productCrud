// HTML Elements
// Capturing elements
// Inputs
const searchBar = document.getElementById('searchBar')
const productName = document.getElementById('productName')
const price = document.getElementById('price')
const description = document.getElementById('description')
const imgUrl = document.getElementById('imgUrl')
const newName = document.getElementById('newName')
const newPrice = document.getElementById('newPrice')
const newDescription = document.getElementById('newDescription')
const newImgUrl = document.getElementById('newImgUrl')

// Buttons
const exportBtn = document.getElementById('exportBtn')
const saveBtn = document.getElementById('saveBtn')
const updateBtn = document.getElementById('updateBtn')
const cancelBtn = document.getElementById('cancelBtn')

// Containers
const productList = document.getElementById('productList')
const editModal = document.getElementById('editModal')

// Capturing values and exporting it
export const getInputValues = () => ({
    searchBarValue: searchBar.value,
    productNameValue: productName.value,
    priceValue: price.value, 
    descriptionValue: description.value, 
    imgUrlValue: imgUrl.value, 
    newNameValue: newName.value,
    newPriceValue: newPrice.value,
    newDescriptionValue: newDescription.value,
    newImgUrlValue: newImgUrl.value,
});

// Exporting buttons
export const globalBtns = {
    exportBtn,
    saveBtn,
    updateBtn,
    cancelBtn,
}

// Exporting the inputs
export const inputs = {
    searchBar,
    productName,
    price, 
    description,
    imgUrl,
    newName,
    newDescription,
    newPrice,
    newImgUrl,
}

// Exporting containers
export const globalContainers = {
    productList,
    editModal,
}
