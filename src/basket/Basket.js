import { useState, useEffect } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { Link, } from "react-router-dom";
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
  getProductById
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
  }, []);


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

          setProductCount(count);
          setTotalPrice(price);
          setProducts(
            productsInCart.map((product) => ({
              ...product,
              cartData: currentCart,
            }))
          );

          const cartQuantity = await getCartQuantity(currentCart.id);
          console.log("Cart quantity:", cartQuantity);
          if (cartQuantity === 0) {
            console.log("Cart is empty. Showing empty cart modal.");
            setShowEmptyCartModal(true);
          }
        } catch (error) {
          console.error("Error fetching cart data: ", error);
        } finally {
          setLoading(false); // set loading state to false after data is fetched
        }
      }
    }

    fetchCartData();
  }, [cart]);

  

  const handleAddToCart = async (productId) => {
    const cartId = localStorage.getItem('cartId');

    try {
      await addProductToCart(cartId, productId);
      // Update the local state to reflect the changes made to the cart
      const updatedCart = await getCartById(cartId);
      setCart(updatedCart);
      const [count, price, productsInCart] = await Promise.all([
        getProductCount(updatedCart.id),
        getTotalPrice(updatedCart.id),
        getProductsInCart(updatedCart.id),
      ]);
      setProductCount(count);
      setTotalPrice(price);
      setProducts(
        productsInCart.map((product) => ({
          ...product,
          cartData: updatedCart,
        }))
      );
    } catch (error) {
      console.error("Error adding product to cart: ", error);
    }
  };
  

  const handleRemoveFromCart = async (productId) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      throw new Error('Cart ID is undefined');
    }
    if (!productId) {
      throw new Error('Product ID is undefined');
    }
  
    try {
      await removeProductFromCart(cartId, productId);
      setCart(await getCartById(cartId));
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  

  const handleEmptyCart = async () => {
    try {
      await emptyCart(cart.id);
      setCart(await getCartById(cart.id));
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

  return (
    <div>
      <h1>Basket</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
                {products.map((product) => (
                        <Card key={product.id}>
                        <Card.Body>
                          <Button variant="secondary" style={{ marginRight: "10px" }} onClick={() => window.history.back()}>
                            Go back
                          </Button>
                          <Link to="/products/">
                            <Button variant="primary">Continue shopping</Button>
                          </Link>
                          <Card.Img  variant="top" src={product.image} alt={product.name} />
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>{product.description}</Card.Text>
                          <Card.Text>Size: {product.size}</Card.Text>
                          <Card.Text>Price: {product.price} GBP</Card.Text>
                          <label htmlFor="quantity">Quantity:</label>
<div>
  <button onClick={() => handleRemoveFromCart(product.id)}>-</button>
  <span>{product.quantity}</span>
  <button onClick={() => handleAddToCart(product.id)}>+</button>
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