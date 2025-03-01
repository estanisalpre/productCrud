import { globalContainers } from "../arrays/Elements.js";

export function printProducts(filterText = "") {
    const productList = JSON.parse(localStorage.getItem("products")) || [];

    globalContainers.productList.innerHTML = "";

    const filteredProducts = productList.filter(product =>
        product.productName.toLowerCase().includes(filterText.toLowerCase())
    );

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
    `;
    globalContainers.productList.appendChild(thead);

    const tbody = document.createElement("tbody");

    filteredProducts.forEach((product, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.productName}</td>
            <td>$${product.price}</td>
            <td>${product.description}</td>
            <td>
                <img src="${product.imgUrl}" alt="Imagen de ${product.productName}" width="50">
            </td>
            <td>
                <img src="./src/assets/icons/edit.png" data-id="${index}" class="editBtn" alt="Editar">
            </td>
            <td>
                 <img src="./src/assets/icons/delete.png" data-id="${index}" class="deleteBtn" alt="Eliminar">
            </td>
        `;
        tbody.appendChild(tr);
    });

    globalContainers.productList.appendChild(tbody);
}