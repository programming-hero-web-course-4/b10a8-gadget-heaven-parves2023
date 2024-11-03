import { Link } from "react-router-dom";

function Card({ product }) {
  if (!product) {
    return null; // Return null if product is not available
  }

  return (
    <div>
      <div className="card bg-white shadow-xl">
        <figure className="px-2 pt-2">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="rounded-xl h-40 object-cover w-full"
          />
        </figure>
        <div className="card-body px-5">
          <h2 className="card-title">{product.product_title}</h2>
          <p>Price: ${product.price}</p>
          <div className="card-actions">
            <Link
              to={`/product-details/${product.product_id}`}
              className="btn bg-white rounded-full border-[#9538E2]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
