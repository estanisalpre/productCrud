// Search bar functionality
import { printProducts } from "../utils/printProducts.js";

export function searchProducts(){
    const searchInput = document.getElementById("searchBar");

    searchInput.addEventListener("input", () => {
        printProducts(searchInput.value.toLowerCase().trim());
    });
}