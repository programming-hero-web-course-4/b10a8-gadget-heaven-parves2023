import { useEffect, useState, useRef } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { toast } from 'react-toastify'; 
import doneImg from "../assets/Group.png";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const { cart, setCart, wishList,addToCart,removeFromWishList } = useOutletContext();
  const [sortedCart, setSortedCart] = useState(cart);
  const [totalCost, setTotalCost] = useState(0);
  const modalRef = useRef(null);

  const location = useLocation();
  const pathnameWithoutSlash = location.pathname.startsWith('/') ? location.pathname.slice(1) : location.pathname;
  

  const [cartActive, setCartActive] = useState(true);

  useEffect(() => {
    const cost = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalCost(cost);
    setSortedCart(cart);
  }, [cart]);

  const removeFromCart = (id) => {
    const updatedCart = sortedCart.filter((item) => item.product_id !== id);
    setCart(updatedCart);
    setSortedCart(updatedCart);
    toast.warn("Item removed from cart!", { autoClose: 1000 });
  };
  

  const sortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => a.price - b.price);
    setSortedCart(sorted);
  };

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Gadgets | {pathnameWithoutSlash} </title>
      </Helmet>
      <div className="mx-auto bg-[#9538E2] space-y-8">
        {/* Header Section */}
        <div className="text-white py-8 text-center rounded-lg">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className=" space-x-5 my-7">
            <button
              onClick={() => setCartActive(true)}
              className={`${cartActive ? "" : "btn-outline"} btn`}
            >
              Cart
            </button>
            <button
              onClick={() => setCartActive(false)}
              className={`${cartActive ? "btn-outline" : ""} btn`}
            >
              WishList
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5">
        {/* Cart Summary */}
        {cartActive && <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Cart {cart.length}</h1>
          <div className="flex items-center gap-5">
            <h1 className="text-2xl font-semibold">Total Cost : {totalCost}</h1>
            <button onClick={sortByPrice} className="btn btn-secondary">
              Sort by price
            </button>
            <button onClick={showModal} className="btn btn-primary">
              Purchase
            </button>
          </div>
        </div>}

{/* Cart and Wishlist Items */}
{cartActive ? (
  cart.length === 0 ? (
    <p className="text-center text-gray-500 my-4">
      Your cart is currently empty.
    </p>
  ) : (
    sortedCart.map((item, index) => (
      <section key={index} className="border rounded-lg my-4 relative">
        <div className="gap-4 p-2 flex flex-col md:flex-row items-center mx-auto">
          <div className="bg-slate-200 rounded-md">
            <img
              src={item.product_image}
              alt={item.product_title}
              className="size-36 p-1 object-cover"
            />
          </div>
          <div className="flex-grow flex flex-col gap-3">
            <h1 className="text-xl font-semibold">{item.product_title}</h1>
            <p className="text-md">{item.description}</p>
            <h1 className="text-lg font-semibold">Price: ${item.price}</h1>
          </div>
        </div>
        <div className="absolute right-0 top-10">
          <MdOutlineDeleteForever
            className="size-16 text-gray-400 hover:text-red-400 cursor-pointer"
            onClick={() => removeFromCart(item.product_id)}
          />
        </div>
      </section>
    ))
  )
) : (
  wishList.length === 0 ? (
    <p className="text-center text-gray-500 my-4">
      Your wishlist is currently empty.
    </p>
  ) : (
    wishList.map((item, index) => (
      <section key={index} className="border rounded-lg my-4 relative">
        <div className="gap-4 p-2 flex flex-col md:flex-row items-center mx-auto">
          <div className="bg-slate-200 rounded-md">
            <img
              src={item.product_image}
              alt={item.product_title}
              className="size-36 p-1 object-cover"
            />
          </div>
          <div className="flex-grow flex flex-col gap-3">
            <h1 className="text-xl font-semibold">{item.product_title}</h1>
            <p className="text-md">{item.description}</p>
            <h1 className="text-lg font-semibold">Price: ${item.price}</h1>
          </div>
        </div>
        <div className="absolute right-0 top-10 flex gap-2 items-center">
          {/* Add to Cart from Wishlist */}
          <button
            className="btn bg-[#9538E2] text-white p-2 rounded"
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to Cart
          </button>
          {/* Remove from Wishlist */}
          <MdOutlineDeleteForever
            className="size-16 text-gray-400 hover:text-red-400 cursor-pointer"
            onClick={() => removeFromWishList(item.product_id)}
          />
        </div>
      </section>
    ))
  )
)}



        {/* Modal */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box flex justify-center items-center flex-col gap-3">
            <img src={doneImg} alt="" />
            <h3 className="font-bold text-lg">Payment Successfully!</h3>
            <p className="py-4">
              Thanks for purchasing.
              <br />
              Total: {totalCost}
            </p>
            <div className="modal-action w-full text-center">
              <button
                className="btn w-full"
                onClick={() => modalRef.current.close()}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Dashboard;
