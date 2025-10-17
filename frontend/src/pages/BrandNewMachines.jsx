import React, { useState } from "react";
import Navbar from "../components/Navbar";
const BrandNewMachines = () => {
  // Example product data (you can later fetch from backend)
  const products = [
    { id: 1, name: "CNC Lathe Machine", price: 12500, image: "/src/assets/images/machine1.jpg" },
    { id: 2, name: "Hydraulic Press", price: 9800, image: "/src/assets/images/machine2.jpg" },
    { id: 3, name: "Milling Machine", price: 8700, image: "/src/assets/images/machine3.jpg" },
    { id: 4, name: "Drilling Machine", price: 5200, image: "/src/assets/images/machine4.jpg" },
    { id: 5, name: "Industrial Grinder", price: 4300, image: "/src/assets/images/machine5.jpg" },
  ];

  const [search, setSearch] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-[#ff6600]">
        Brand New Machines
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search machines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
        />
      </div>

      {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {product.name}
              </h3>
              <p className="text-[#ff6600] font-bold text-lg mb-3">
                ${product.price.toLocaleString()}
              </p>
              <button className="w-full bg-[#b0b0b0] text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* If no products found */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No products found matching "{search}".
        </p>
      )}
    </div>
    </>
  );
};

export default BrandNewMachines;
