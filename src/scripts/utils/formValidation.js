// Form validation here
import { getInputValues, inputs } from "../arrays/Elements.js";

export function validation(){
    let validationState;

    if (getInputValues().productNameValue === ''){
        inputs.productName.classList.add('errorInput')
        alert('Nombre de producto vacío')
        validationState = 0;
    } else if (getInputValues().descriptionValue === ''){
        inputs.description.classList.add('errorInput')
        alert('Descripción vacía')
        validationState = 0;
    } else if (getInputValues().priceValue < 0 || getInputValues().priceValue === ''){
        inputs.price.classList.add('errorInput')
        alert('Sin precio o en negativo')
        validationState = 0;
    } else if (getInputValues().imgUrlValue === '') {
        inputs.imgUrl.classList.add('errorInput')
        alert('Sin url de imagen')
        validationState = 0;
    } else {
        validationState = 1;
    }

    return validationState;
}