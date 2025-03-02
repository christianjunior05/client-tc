import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // Check if product is already in cart
      if (prevItems.some(item => item.id === product.id)) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId: number) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};