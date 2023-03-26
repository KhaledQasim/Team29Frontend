import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { Link, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './basket.css'
import {
  addProductToCart,
  removeProductFromCart,
  getProductCount,
  emptyCart,
  getTotalPrice,
  getProductsInCart,
  updateCartQuantity,
  getCartQuantity,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
  getProductById,
  getProductDetails

} from "./cartFunctions";

export default function Basket({ cartData }) {
  const [cart, setCart] = useState(cartData);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [products, setProducts] = useState([]);
  const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartChanged, setCartChanged] = useState(false)
  const BASE_URL = 'http://localhost:3000/carts';

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching cart data...");
        setLoading(true); // set loading state to true before fetching data
        let cartId = localStorage.getItem("cartId");
        let cartData;

        if (!cartId) {
          console.log("No cartId found in localStorage. Creating new cart...");
          const createdCart = await createCart();
          if (!createdCart.products || createdCart.products.length === 0) {
            // handle case where no products in cart
          } else {
            localStorage.setItem("cartId", createdCart.id);
            cartData = createdCart; // assign cartData to the created cart
            console.log("Cart data fetched: ", createdCart);
          }
        } else {
          console.log("Using existing cartId from localStorage:", cartId);
          const cartDataString = localStorage.getItem("cartData");
          if (cartDataString) {
            cartData = JSON.parse(cartDataString);
            console.log("Cart data fetched: ", cartData);
          } else {
            console.log("No cartData found in localStorage. Fetching from server...");
            cartData = await getCartById(cartId);
            if (!cartData.products || cartData.products.length < 0) {
              // handle case where no products in cart
            } else {
              localStorage.setItem("cartData", JSON.stringify(cartData));
              console.log("Cart data fetched: ", cartData);
            }
          }
        }
        setCart(cartData); // update cart with fetched cartData
        setLoading(false); // set loading state to false after data is fetched
        return cartData; // return cartData from the useEffect hook
      } catch (error) {
        console.error("Error fetching cart data: ", error);
      }
    }

    fetchData();
  }, [cartChanged]);


  useEffect(() => {
    async function fetchCartData() {
      console.log("Fetching cart data...");
      console.log("Cart:", cart);
      setLoading(true); // set loading state to true before fetching data
    
      if (cart) {
        try {
          const currentCart = cart;
          console.log("Current Cart:", currentCart);
          const [count, price, productsInCart] = await Promise.all([
            getProductCount(currentCart.id),
            getTotalPrice(currentCart.id),
            getProductsInCart(currentCart.id),
          ]);
    
          console.log("Count:", count);
          console.log("Price:", price);
          console.log("Products in cart:", productsInCart);
    
          // Fetch product data for each product in the cart
          const productsWithDetails = await Promise.all(productsInCart.map(async (product) => {
            const { name, image } = await getProductDetails(product.productId);
            return {
              ...product,
              cartData: currentCart,
              name,
              image,
            };
          }));
    
          setProductCount(count);
          setTotalPrice(price);
          setProducts(productsWithDetails);
    
          setShowEmptyCartModal(productsInCart.length === 0);
        } catch (error) {
          console.error("Error fetching cart data: ", error);
        } finally {
          setLoading(false); // set loading state to false after data is fetched
        }
      }
    }
    
    fetchCartData();
  }, [cart]);
  useEffect(() => {
    // listen for changes in cartChanged state variable and reload page when there is a change
    function reloadPage() {
      window.location.reload();
    }
    if (cartChanged) {
      reloadPage();
    }
  }, [cartChanged]);

  const setQuantity = (productId, size, newQuantity) => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const existingProductIndex = cartData.findIndex(
      (product) => product.id === productId && product.size === size
    );
  
    if (existingProductIndex !== -1) {
      cartData[existingProductIndex].quantity = newQuantity;
      localStorage.setItem('cartData', JSON.stringify(cartData));
      handleUpdateCart(cartData);
    }
  };
  

  const handleUpdateCart = async (cartData) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      throw new Error('Cart ID is undefined');
    }
  
    const updatedCartData = [...cartData, { ...cartData }];
    const quantity = getCartQuantity(updatedCartData);
    const totalPrice = getTotalPrice(updatedCartData);
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        quantity: quantity,
        totalPrice: totalPrice,
      },
    };
  
    const requestBody = {
      products: updatedCartData,
    };
  
    try {
      await axios.put(`${BASE_URL}/${cartId}`, requestBody, config);
      console.log('Cart Updated:', requestBody);
      setCartChanged(true); // set cartChanged to true
      return true; // indicate that the request was successful
    } catch (error) {
      throw new Error('Failed to update cart'); // throw an error if the request failed
    }
  };
  
  
  
  const handleAddToCart = async (productId, size, quantity = 1, price) => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const existingProductIndex = cartData.findIndex(
      (product) => product.id === productId && product.size === size
    );
  
    if (existingProductIndex !== -1) {
      // If product already exists in cart, update the quantity of the existing product
      cartData[existingProductIndex].quantity += quantity;
    } else {
      // If product doesn't exist in cart, add it to the cart
      cartData.push({ id: productId, size, quantity, price });
    }
  
    localStorage.setItem('cartData', JSON.stringify(cartData));
  
    // Updated call to handleUpdateCart function
    await handleUpdateCart(cartData);
    setCartChanged(true); // set cartChanged to true

  };
  
  
  
  const handleRemoveFromCart = async (productId, size, quantity = 1, price) => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const existingProductIndex = cartData.findIndex(
      (product) => product.id === productId && product.size === size
    );
  
    if (existingProductIndex !== -1) {
      const updatedQuantity = cartData[existingProductIndex].quantity - quantity;
      if (updatedQuantity <= 0) {
        cartData.splice(existingProductIndex, 1);
      } else {
        cartData[existingProductIndex].quantity = updatedQuantity;
      }
  
      localStorage.setItem('cartData', JSON.stringify(cartData));
  
      // Updated call to handleUpdateCart function
      await handleUpdateCart(cartData);
      setCartChanged(true); // set cartChanged to true

    }
  };
  
  const handleRemoveProduct = async (productId, size, quantity, price) => {
    const cartId = localStorage.getItem('cartId');
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const existingProductIndex = cartData.findIndex(
      (product) => product.id === productId && product.size === size
    );
  
    if (existingProductIndex !== -1) {
      const updatedQuantity = cartData[existingProductIndex].quantity - quantity;
      if (updatedQuantity <= 0) {
        cartData.splice(existingProductIndex, 1);
      } else {
        cartData[existingProductIndex].quantity = updatedQuantity;
      }
  
      localStorage.setItem('cartData', JSON.stringify(cartData));
  
      // Updated call to handleUpdateCart function
      await handleUpdateCart(cartData);
      setCartChanged(true); // set cartChanged to true

    }
  };
  

  const handleEmptyCart = async () => {
    try {
      await emptyCart(cart.id);
      setCart(await getCartById(cart.id));
      setCartChanged(true); // set cartChanged to true

    } catch (error) {
      console.error("Error emptying cart:", error);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await updateCartQuantity(productId, quantity);
      const updatedCart = await getCartById(cart.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      setCartChanged(true); // set cartChanged to true

    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };


  const handleDeleteCart = async () => {
    try {
      await deleteCart(cart.id);
      localStorage.removeItem("cartId");
      setCart(null);
      setShowDeleteModal(false);
      setCartChanged(true); // set cartChanged to true

    } catch (error) {
      console.error("Error deleting cart:", error);
    }
  };
  const handleShowEmptyCartModal = () => setShowEmptyCartModal(true);
  const handleCloseEmptyCartModal = () => setShowEmptyCartModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleProductToDelete = (productId) => {
    setProductToDelete(productId);
    handleShowDeleteModal();
  };
  const handleProductDeleteConfirm = () => {
    handleRemoveFromCart(productToDelete);
    handleCloseDeleteModal();
  };
  const handleQuantityChange = async (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    try {
      await handleUpdateQuantity(productId, newQuantity);
      const updatedProducts = products.map(product => {
        if (product.productId === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  };

  const handleCheckout = () => {
  // redirect to checkout page
  };

  return (
    <div>
      <h1>Basket</h1>
      <Button variant="secondary" style={{ marginRight: "10px" }} onClick={() => window.history.back()}>
                      Go back
                    </Button>
                    <Link to="/products/">
                      <Button variant="primary">Continue shopping</Button>
                    </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {products.map((product, index) => (
                <Card key={index}>
                  <Card.Body>
  
                    <div>
                    <div className="product-image">
                    <Card.Img variant="left" src={product.image} alt={product.name} style={{ width: "100px", height: "auto", marginRight: "10px" }} />
  </div>                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text>Size: {product.size}</Card.Text>
                      <Card.Text>Price: {product.price} GBP</Card.Text>
                      <label htmlFor="quantity">Quantity:</label>
                      <div>
                      <button onClick={() => handleRemoveProduct(product.id, product.size)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                        <button onClick={() => handleRemoveFromCart(product.id, product.size, 1, product.price)}>-</button>
                        <button onClick={() => handleAddToCart(product.id, product.size, 1, product.price)}>+</button>
                        <select
                          value={product.quantity}
                          onChange={(e) => handleAddToCart(product.id, product.size, e.target.value - product.quantity, product.price)}
                        >
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
              <p>Product count: {productCount}</p>
              <p>Total price: {totalPrice}</p>
              <Button variant="primary" onClick={() => setShowEmptyCartModal(true)}>
                Empty cart
              </Button>
              <Button variant="primary" onClick={() => setShowDeleteModal(true)}>
                Delete cart
                  </Button>
              <Button variant="primary" onClick={handleCheckout}>Checkout</Button>

            </div>
          )}
        </div>
      )}
      <Modal show={showEmptyCartModal} onHide={() => setShowEmptyCartModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Empty cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to empty your cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEmptyCartModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEmptyCart}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => deleteCart(cart.id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}  