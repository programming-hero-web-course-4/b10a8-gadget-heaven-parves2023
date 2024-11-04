import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/gadgets.json");
        const data = await response.json();
        const selectedProduct = data.find(
          (item) => item.product_id === productId
        );
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="bg-[#9538E2]">
      
    <div className="container mx-auto p-6 space-y-8 relative mb-[30rem]">
      {/* Header Section */}
      <div className=" text-white py-8 pb-44 text-center rounded-lg">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-8/12 absolute -bottom-[21rem] left-1/2 transform -translate-x-1/2">
        <figure className="lg:w-1/2">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="p-6 lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {product.product_title}
          </h2>
          <p className="text-lg text-gray-800 font-semibold">
            Price: ${product.price}
          </p>
          <p
            className={`text-lg font-medium ${
              product.availability ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.availability ? "In Stock" : "Out of Stock"}
          </p>

          <p className="text-gray-700">{product.description}</p>

          <div className="text-gray-800">
            <h3 className="font-semibold">Specifications:</h3>
            <ol className="list-decimal list-inside">
              {product.Specification.map((spec, index) => (
                <li className="text-gray-700" key={index}>
                  {spec}
                </li>
              ))}
            </ol>
          </div>
            <h3 className="font-semibold">Ratings:</h3>

            <div className="rating">
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          checked={index + 1 === product.rating}
          readOnly
        />
      ))}
      <div className="bg-slate-200 size-8 flex items-center justify-center ml-4 rounded ">
      {product.rating}
      </div>
    </div>

    
    <br />


    <div className="flex space-x-4 mt-4"> {/* Flex container for buttons */}
      <button className="btn bg-[#9538E2] text-white">Add to Cart <BsCart3 className="size-6"></BsCart3></button>
      <button className="btn bg-gray-200 text-gray-800 rounded-full"><FaRegHeart className="rounded-full"></FaRegHeart></button>
    </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetails;
