// All functionaly ends here
import { saveProducts } from "./actions/save.js"
import { printProducts } from "./utils/printProducts.js";
import { editProducts } from "./actions/edit.js";
import { deleteProducts } from "./actions/delete.js";
import { navButtons } from "./utils/navBtns.js";
import { searchProducts } from "./actions/search.js";

document.addEventListener('DOMContentLoaded', () => {
    navButtons();
    printProducts();
    saveProducts();
    editProducts();
    deleteProducts();
    searchProducts();
})