import { toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/carts';

export const getProductId = async (productid) => {
  const response = await axios.get(`/product/${productid}`);
  const product = response.data;
  return product.id;
};
export async function getProductDetails(productId) {
  const response = await axios.get(`/product/${productId}`);
  return response.data;
}
export const getProductById = async (productId) => {
  try {
    console.log('ID:', productId);
    const response = await axios.get(`/product/${productId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}: `, error);
    throw new Error(`Error fetching product with ID ${productId}`);
  }
};

export const getCartById = async (cartId) => {
  if (!cartId) {
    throw new Error('Cart ID is undefined');
  }

  let cartData = JSON.parse(localStorage.getItem(`cart-${cartId}`));

  if (cartData) {
    return cartData;
  } else {
    const response = await axios.get(`${BASE_URL}/${cartId}`);
    const data = response.data;
    localStorage.setItem(`cart-${cartId}`, JSON.stringify(data));
    return data;
  }
};



export const createCart = async () => {
  try {
    const response = await axios.post(`${BASE_URL}`, {});
    const { data: cart } = response;
    localStorage.setItem('cartId', cart.id); // set the cartId in local storage
    return cart;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw new Error('Error creating cart');
  }
};


export const getCart = async () => {
  const cartId = localStorage.getItem('cartId');

  if (!cartId) {
    throw new Error('Cart ID is undefined');
  }

  try {
    const response = await axios.get(`${BASE_URL}/${cartId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get cart');
  }
};

export const updateCart = async (productId, size, price) => {
  const cartId = localStorage.getItem('cartId');
  if (!cartId) {
    throw new Error('Cart ID is undefined');
  }
  const cartData = JSON.parse(localStorage.getItem('cartData') || '{}');
  const cart = await getCart(cartId);
  const updatedCartData = [...cart.products, { ...cartData }];
  const quantity = getCartQuantity(updatedCartData);
  const totalPrice = getTotalPrice(updatedCartData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    params: {
      quantity,
      totalPrice
    }
  };
  const requestBody = {
      productId,
      quantity,
      size,
      price,
    };
  const response = await axios.put(`${BASE_URL}/${cartId}`, requestBody, config);
  const updatedCart = response.data;
  updatedCart.quantity = quantity;
  updatedCart.totalPrice = totalPrice;
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const deleteCart = async (cartId) => {
  if (!cartId) {
    throw new Error('Cart ID is undefined');
  }
  const response = await axios.delete(`${BASE_URL}/${cartId}`);
  localStorage.removeItem('cartId'); // remove the cartId from local storage
  localStorage.removeItem('cart'); // remove the cart data from local storage
  return response.data;
};
export const addProductToCart = async (productId, quantity, size, price) => {
  let cartId = localStorage.getItem('cartId');
  console.log(cartId);
  try {
    // If cart ID is undefined, create a new cart
    if (cartId === null) {
      const response = await axios.post(`${BASE_URL}`, {});
      const { data: cart } = response;
      cartId = cart.id;
      console.log(cartId);
      localStorage.setItem('cartId', cartId);
    }
    // Get the cart and add the product
    const cart = await getCart(cartId);
    const cartData = {
      productId,
      quantity,
      size,
      price,
    };
    await axios.post(`${BASE_URL}/${cartId}/addproduct`, cartData); 
    // Update the cart
    await updateCart(cartId, cart);
    // Update local storage with the new cart data
    localStorage.setItem('cart', JSON.stringify(cart));
    window.alert('Product added to cart!');
  } catch (error) {
    window.alert('Failed to add product to cart');
  }
}




export const removeProductFromCart = async (productId, quantity) => {
  const cartId = localStorage.getItem('cartId');

  if (!cartId) {
    throw new Error('Cart ID is undefined');
  }
  if (!productId) {
    throw new Error('Product ID is undefined');
  }

  try {
    const response = await axios.delete(`${BASE_URL}/${cartId}/deleteproduct/${productId}`, { data: { quantity } });

    const { data: cart } = response;
    localStorage.setItem('cartId', cart.id);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update the cart object in localStorage
    window.alert('Product removed from cart!');
  } catch (error) {
    window.alert('Failed to remove product from cart');
  }
};

export const getProductCount = () => {
  const cartData = JSON.parse(localStorage.getItem('cartData'));
  if (!cartData) {
    return 0;
  }
  const cartQuantity = cartData.reduce((total, item) => total + item.quantity, 0);
  return cartQuantity;
};

export const getTotalPrice = () => {
  const cartData = JSON.parse(localStorage.getItem('cartData'));
  if (!cartData) {
    throw new Error("No cart data found in localStorage for getTotalPrice");
  }
  const totalPrice = cartData.reduce((total, item) => total + item.quantity * item.price, 0);
  return totalPrice;
};

export const getProductsInCart = () => {
  const cartData = JSON.parse(localStorage.getItem('cartData'));
  if (!cartData) {
    throw new Error('No cart data found in localStorage for getProductsInCart');
  }
  return cartData;
};


export const handleSizeChange = async (event, productId) => {
  const selectedSize = event.target.value;
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingProductIndex = cartItems.findIndex((item) => item.id === productId);
  if (existingProductIndex >= 0) {
    const productId = await getProductId(productId);
    cartItems[existingProductIndex].productId = productId;
    cartItems[existingProductIndex].size = selectedSize;
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartModal();
}
export const emptyCart = () => {
  const cartId = localStorage.getItem('cartId');
  const cartData = JSON.parse(localStorage.getItem('cartData'));

  if (!cartId) {
    return;
  }
  localStorage.removeItem('cartData');
  updateCart(cartId,cartData);
};

  export const hasProductInCart = async (productId) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      throw new Error('No cart ID found in localStorage for hasProductInCart');
    }
    if (!productId) {
      throw new Error('Product ID is undefined');
    }
    const response = await axios.get(`${BASE_URL}/${cartId}/products/${productId}`);
    return response.data;
  };
  export const updateCartQuantity = async (quantity) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId || !quantity) {
      throw new Error('Invalid parameters for updating cart quantity');
    }
    const cartQuantity = await getCartQuantity();
    const response = await axios.put(`${BASE_URL}/${cartId}/quantity`, cartQuantity);
    return response.data;
  };
  
 
  export const getCartQuantity = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    if (!cartData) {
      return 0;
    }
    const cartQuantity = cartData.reduce((total, item) => total + item.quantity, 0);
    return cartQuantity;
  };
  
  
  
// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// Check that modal, btn, and span exist before setting event listeners
if (modal && btn && span) {
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = 'block';
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
export function getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItems;
  }
  
export function updateCartModal() {
    const cart = getCart();
    const cartModal = document.getElementById('cartModal');
    cartModal.innerHTML = '';
    
    if (cart.items.length === 0) {
      cartModal.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    const table = document.createElement('table');
  
    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
    const headerPrice = document.createElement('th');
    const headerQuantity = document.createElement('th');
    const headerTotal = document.createElement('th');
    headerName.textContent = 'Product';
    headerPrice.textContent = 'Price';
    headerQuantity.textContent = 'Quantity';
    headerTotal.textContent = 'Total';
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerPrice);
    headerRow.appendChild(headerQuantity);
    headerRow.appendChild(headerTotal);
    table.appendChild(headerRow);
  
    let totalPrice = 0;
  
    cart.items.forEach(cartItem => {
      const product = getProductById(cartItem.productId);
      const row = document.createElement('tr');
      const name = document.createElement('td');
      const price = document.createElement('td');
      const quantity = document.createElement('td');
      const total = document.createElement('td');
      name.textContent = product.name;
      price.textContent = '$' + product.price.toFixed(2);
      quantity.textContent = cartItem.quantity;
      const itemTotal = product.price * cartItem.quantity;
      total.textContent = '$' + itemTotal.toFixed(2);
      row.appendChild(name);
      row.appendChild(price);
      row.appendChild(quantity);
      row.appendChild(total);
      table.appendChild(row);
      totalPrice += itemTotal;
    });
  
    const totalRow = document.createElement('tr');
    const totalName = document.createElement('td');
    totalName.setAttribute('colspan', 3);
    totalName.textContent = 'Total';
    const totalAmount = document.createElement('td');
    totalAmount.textContent = '$' + totalPrice.toFixed(2);
    totalRow.appendChild(totalName);
    totalRow.appendChild(totalAmount);
    table.appendChild(totalRow);
  
    cartModal.appendChild(table);
  }
  