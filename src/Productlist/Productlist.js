import React, { useState, useEffect } from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
          <p className="text-gray-800 font-medium mt-2">{product.title}</p>
          <p className="text-gray-500 text-sm">{product.ratings}</p>
          <p className="text-blue-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Best Seller');
  const [products, setProducts] = useState([]);

  const tabs = [
    { id: 'Best Seller', label: 'Best Seller' },
    { id: 'Best Seller Combos', label: 'Best Seller Combos' },
    { id: 'New Launches', label: 'New Launches' },
    { id: 'Hair Care', label: 'Hair Care' },
    { id: 'Skin Care', label: 'Skin Care' },
    { id: 'Sun Care', label: 'Sun Care' },
  ];

  useEffect(() => {
    // Fetch products from the API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const changeTab = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div className="container mx-auto">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2">
            <a
              href="#"
              onClick={(e) => changeTab(tab.id, e)}
              className={`inline-block p-4 rounded-lg ${
                activeTab === tab.id
                  ? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500'
                  : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <ProductList products={products} />
    </div>
  );
};

export default Tabs;
