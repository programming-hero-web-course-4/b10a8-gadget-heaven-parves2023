import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/gadgets.json");
        const data = await response.json();
        const selectedProduct = data.find((item) => item.product_id === productId);
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
    <div>
      <h1>{product.product_title}</h1>
      <img src={product.product_image} alt={product.product_title} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {/* Add more product details as needed */}
    </div>
  );
}

export default ProductDetails;
