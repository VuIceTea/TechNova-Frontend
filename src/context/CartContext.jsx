import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('technova-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage 
    useEffect(() => {
        localStorage.setItem('technova-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product, selectedVariant = {}) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => 
                item.id === product.id &&
                item.selectedVariant?.selectedColor?.code === selectedVariant.selectedColor?.code &&
                item.selectedVariant?.selectedStorage === selectedVariant.selectedStorage &&
                item.selectedVariant?.selectedRam === selectedVariant.selectedRam &&
                item.selectedVariant?.selectedScreenSize === selectedVariant.selectedScreenSize
            );

            if (existingItemIndex > -1) {
                // Item exists, increase quantity
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            } else {
                // Add new item
                return [...prevItems, {
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    originalPrice: product.originalPrice,
                    image: product.image,
                    brand: product.brand,
                    category: product.category,
                    selectedVariant,
                    quantity: 1
                }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (itemId, selectedVariant = {}) => {
        setCartItems(prevItems => 
            prevItems.filter(item => {
                if (item.id !== itemId) return true;
                // Check if variants match
                return !(
                    item.selectedVariant?.selectedColor?.code === selectedVariant?.selectedColor?.code &&
                    item.selectedVariant?.selectedStorage === selectedVariant?.selectedStorage &&
                    item.selectedVariant?.selectedRam === selectedVariant?.selectedRam &&
                    item.selectedVariant?.selectedScreenSize === selectedVariant?.selectedScreenSize
                );
            })
        );
    };

    // Update item quantity
    const updateQuantity = (itemId, selectedVariant, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemId, selectedVariant);
            return;
        }

        setCartItems(prevItems => 
            prevItems.map(item => {
                if (item.id === itemId &&
                    item.selectedVariant?.selectedColor?.code === selectedVariant?.selectedColor?.code &&
                    item.selectedVariant?.selectedStorage === selectedVariant?.selectedStorage &&
                    item.selectedVariant?.selectedRam === selectedVariant?.selectedRam &&
                    item.selectedVariant?.selectedScreenSize === selectedVariant?.selectedScreenSize) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate totals
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemsCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
