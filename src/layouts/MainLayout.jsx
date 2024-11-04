import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useState } from 'react';

const MainLayout = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);



  const addToCart = (product) => {
    // const itemExists = cart.some((item) => parseInt(item.product_id) === parseInt(product.product_id));
    const itemOnWishlist = wishList.some((item) => parseInt(item.product_id) === parseInt(product.product_id));
  

    const currentTotalPrice = cart.reduce((total, item) => total + item.price, 0);
    const newTotalPrice = currentTotalPrice + product.price;
  
    if (newTotalPrice > 1000) {
      toast.error("Total cart value cannot exceed $1000!", { autoClose: 1000 });
    } else if (itemOnWishlist) {
      toast.warn("Item removed from the WishList!", { autoClose: 1000 });
      setWishList((prevWishList) => prevWishList.filter((list) => list.product_id !== product.product_id));
      setCart((prevCart) => [...prevCart, product]);
      toast.success("Item added to cart!", { autoClose: 1000 });
    } else {
      setCart((prevCart) => [...prevCart, product]);
      toast.success("Item added to cart!", { autoClose: 1000 });
    }
  };
  

  const handleAddToWishList = (product) => {
    const itemExists = cart.some((item) => parseInt(item.product_id) === parseInt(product.product_id));
    const itemOnWishlist = wishList.some((item) => parseInt(item.product_id) === parseInt(product.product_id));

    if (itemOnWishlist) {
      setWishList((prevWishList) => prevWishList.filter((item) => item.product_id !== product.product_id));
      toast.warn("Item removed from wishlist!", { autoClose: 1000 });
    } else {
      if (itemExists) {
        toast("This item is already in the Cart list!", { autoClose: 1000 });
      } else {
        setWishList((prevList) => [...prevList, product]);
        toast.success("Item added to wishlist!", { autoClose: 1000 });
      }
    }
  };

  const removeFromWishList = (productId) => {
    setWishList((prevWishList) =>
      prevWishList.filter((item) => item.product_id !== productId)
    );
    toast.warn("Item removed from wishlist!", { autoClose: 1000 });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar cart={cart} />
      <Outlet context={{ cart, setCart, addToCart, handleAddToWishList, wishList, setWishList, removeFromWishList }} />
      <Footer />
    </div>
  );
};

export default MainLayout;
