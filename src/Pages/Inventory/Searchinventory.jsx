import React, { useState } from "react";
import "./Searchinventory.css";

const products = [
  {
    id: 1,
    image: "/air-ct8510-500-k9-280x280.jpg",
    description: "Cisco ASR1006-10G-SHA/K9 ASR 1006 Aggregation Service Router",
    price: "$258,839.95",
  },
  {
    id: 2,
    image: "/air-ct8510-500-k9-280x280.jpg",
    description: "Cisco Router XYZ High Performance",
    price: "$150,000.00",
  },
  {
    id: 3,
    image: "/air-ct8510-500-k9-280x280.jpg",
    description: "Cisco Network Switch 48-Port",
    price: "$75,500.00",
  },
  {
    id: 4,
    image: "/air-ct8510-500-k9-280x280.jpg",
    description: "Cisco Wireless Router Dual Band",
    price: "$20,000.00",
  },
];

const Searchinventory = () => {
  const [searchinv, setSearchinv] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const showSearchInv = () => {
    if (searchinv.trim() === "") {
      setIsSearchEmpty(true);
      setFilteredProducts([]);
    } else {
      setIsSearchEmpty(false);

      const filtered = products.filter((product) => product.description.toLowerCase().includes(searchinv.toLowerCase()));
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container my-4">
      <div className="max-w-3xl mx-auto p-6 rounded-lg search-inventory">
        <h2 className="mb-4 search-Main-text py-1 px-2">Search</h2>

        <div>
          <h3 className="text-lg font-semibold mb-2">Search Criteria</h3>
          <div className="d-flex gap-2 align-items-center">
            <input type="text" placeholder="Keywords" className="border p-2 rounded w-full" onChange={(obj) => setSearchinv(obj.target.value)} value={searchinv} />
            <select className="border p-2 rounded">
              <option>Categories</option>
            </select>
            <input type="checkbox" id="subcategories" />
            <label htmlFor="subcategories">Search in subcategories</label>
            <input type="checkbox" id="descriptions" className="ml-4" />
            <label htmlFor="descriptions">Search in product descriptions</label>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary" onClick={showSearchInv}>
            Search
          </button>
        </div>

        {isSearchEmpty && (
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold">Search</h3>
            <p>Your shopping cart is empty!</p>
          </div>
        )}

        {/* Show Products if any match found */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-lg-3 my-2" key={product.id}>
                <div className="border rounded py-2">
                  <img src={product.image} className="w-100" alt="Product" />
                  <h4 className="text-center py-1 fs-5">{product.description}</h4>
                  <div className="price text-center">{product.price}</div>
                </div>
              </div>
            ))
          ) : !isSearchEmpty ? (
            <div className="col-12 text-center mt-4">
              <p>No matching products found!</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Searchinventory;
