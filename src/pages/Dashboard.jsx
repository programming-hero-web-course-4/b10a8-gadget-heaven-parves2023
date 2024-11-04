import { useEffect, useState, useRef } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-hot-toast";
import doneImg from '../assets/Group.png'

function Dashboard() {
  const { cart, setCart } = useOutletContext(); // Access cart data
  const [sortedCart, setSortedCart] = useState(cart); // Initial state for sorted cart
  const [totalCost, setTotalCost] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    const cost = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalCost(cost);
  }, [cart]);

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const updatedCart = sortedCart.filter((item) => item.product_id !== id);
    setCart(updatedCart);
    setSortedCart(updatedCart);
    toast.success("Item removed from cart!"); // Show toast message
  };

  // Function to sort the cart by price
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
      <div className="mx-auto bg-[#9538E2] space-y-8">
        {/* Header Section */}
        <div className="text-white py-8 text-center rounded-lg">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="container mx-auto my-5">
        {/* Cart Summary */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Cart {cart.length}</h1>
          <div className="flex items-center gap-5">
            <h1 className="text-2xl font-semibold">Total Cost : {totalCost}</h1>
            <button onClick={sortByPrice} className="btn btn-secondary">
              Sort by price
            </button>
            <button onClick={showModal} className="btn btn-primary">Purchase</button>
          </div>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
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
                  <h1 className="text-xl font-semibold">
                    {item.product_title}
                  </h1>
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
              <button className='btn w-full' onClick={() => modalRef.current.close()}>Close</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Dashboard;
