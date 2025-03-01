// Delete functionality
export function deleteProducts(){
    const deleteBtns = document.querySelectorAll('.deleteBtn')
        deleteBtns.forEach(function(btn){
            btn.addEventListener('click', () => {
                const btnId = btn.dataset.id 
                const productList = JSON.parse(localStorage.getItem('products')) || [];
                
                productList.splice(btnId, 1);

                localStorage.setItem('products', JSON.stringify(productList))

                window.location.reload();
            })
        })
    
}