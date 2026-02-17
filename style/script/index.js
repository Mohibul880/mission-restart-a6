let cart = [];

const cartCountElement = document.getElementById("cart-count");

const addToCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.title, price: product.price, quantity: 1 });
    }
    updateCartCount();
    console.log(cart);
}

const updateCartCount = () => {
    let totalCount = 0;
    cart.forEach((item) => {
        totalCount += item.quantity;
    })
    cartCountElement.textContent = totalCount;
}

document.getElementById("cart-count").addEventListener("click", () => {
    console.log("Cart contents:", cart); 
    
    
});