import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Toaster, toast } from 'react-hot-toast';
import { useState } from 'react';

const MainLayout = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);


  

  const addToCart = (product) => {

  const itemExists = cart.some((item) => {
    return parseInt(item.product_id) === parseInt(product.product_id);
  });
  const itemOnWishlist = wishList.some((item) => item.product_id === item.product_id);

    if (itemExists) {
      toast("Item is already in the cart!"); 
    }else if(itemOnWishlist){
      toast("Item removed from the WishList!");  
      setWishList((preWishList)=> preWishList.filter((list)=> list.product_id !== product.product_id));
      setCart((preCart)=> [...preCart, product]);
      toast.success("Item added to cart!"); 
    }else {
      setCart((prevCart) => [...prevCart, product]);
      toast.success("Item added to cart!");   
    }
  };

  const handleAddToWishList = (product) => {
    
    const itemExists = cart.some((item) => {
      return parseInt(item.product_id) === parseInt(product.product_id);
    });
    const itemOnWishlist = wishList.some((item) => item.product_id === item.product_id);
  

    if (itemOnWishlist) {
      toast.error("item is already in the wishlist!");
    } else {
      if (itemExists) {
        toast("This item is already in the Cart list.");
      } else {
        setWishList((prevList) => [...prevList, product]);
        toast.success("item added to wishlist!");
      }
    }
  };

  return (
    <div>
      <Toaster /> {/* To display the toast notifications */}
      <Navbar />
      <Outlet context={{ cart,setCart, addToCart, handleAddToWishList }} />
      <Footer />
    </div>
  );
};

export default MainLayout;
