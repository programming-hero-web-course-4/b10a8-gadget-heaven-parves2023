import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function Cards() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/gadgets.json"); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };

    fetchProducts();
  }, []);

  const uniqueCategories = [...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-6 container mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-12 gap-3">
        {/* Category Buttons */}
        <div className="col-span-4 md:col-span-2 border rounded-xl bg-white py-3 px-1 space-y-2">
          <Link 
            to="/" 
            onClick={() => setSelectedCategory('All')}
            className={`btn w-full rounded-full ${selectedCategory === 'All' ? 'bg-[#9538e2] text-white' : ''}`}
          >
            All
          </Link>
          {uniqueCategories.map((category, index) => (
            <Link 
              key={index} 
              to={`/category/${category}`} 
              onClick={() => setSelectedCategory(category)}
              className={`btn w-full rounded-full ${selectedCategory === category ? 'bg-[#9538e2] text-white' : ''}`} // Conditional class for active category
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Cards */}
        <div className="md:col-span-10 col-span-8 grid md:grid-cols-3 grid-cols-1 gap-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.product_id} product={product} />
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
