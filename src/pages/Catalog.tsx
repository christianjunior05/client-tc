import React, { useState } from 'react';
import { Search, ShoppingCart, Check, X } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [showCart, setShowCart] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const { cartItems, addToCart, removeFromCart, clearCart, isInCart } = useCart();
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleSubmitOrder = () => {
    // In a real application, this would send the order to the backend
    console.log('Order submitted:', cartItems);
    setOrderSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setOrderSubmitted(false);
      clearCart();
      setShowCart(false);
    }, 3000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Interior Design Products</h1>
        
        <button 
          onClick={() => setShowCart(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-black text-white rounded-lg hover:from-orange-600 hover:to-gray-900 transition-colors"
        >
          <ShoppingCart size={20} />
          <span>Cart ({cartItems.length})</span>
        </button>
      </div>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <select
            className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform hover:scale-105">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 mt-2 flex-1">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-1 ${
                    isInCart(product.id)
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gradient-to-r from-orange-500 to-black text-white hover:from-orange-600 hover:to-gray-900'
                  } transition-colors`}
                >
                  {isInCart(product.id) ? (
                    <>
                      <Check size={16} />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            No products found matching your criteria.
          </div>
        )}
      </div>
      
      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-orange-500 to-black text-white">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button 
                onClick={() => setShowCart(false)}
                className="text-white hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto flex-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  Your cart is empty.
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="h-16 w-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-bold">${item.price.toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {orderSubmitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  <p className="flex items-center">
                    <Check size={20} className="mr-2" />
                    Your order has been submitted successfully! The administrator will contact you with a quote.
                  </p>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-800">Total Items:</span>
                <span>{cartItems.length}</span>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => clearCart()}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex-1"
                  disabled={cartItems.length === 0}
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleSubmitOrder}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-black text-white rounded-lg hover:from-orange-600 hover:to-gray-900 transition-colors flex-1"
                  disabled={cartItems.length === 0 || orderSubmitted}
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;