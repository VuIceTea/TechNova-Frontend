import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Load user from localStorage on init
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return !!localStorage.getItem('user');
    });

    useEffect(() => {
        // Save user to localStorage whenever it changes
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('user');
            setIsAuthenticated(false);
        }
    }, [user]);

    const login = (email, password) => {
        // TODO: Replace with actual API call
        // For now, simulate login with mock data
        const mockUser = {
            id: Date.now(),
            email: email,
            name: 'Nguyễn Văn A',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCef7pJfqmrFZSLWpZUaOPyzFr3Gz-76zdygyEgJG4z6H6Rguhj01Oyx2ZPhGz28vfgV6uz7zb4uom6dX7OSe8sivYnh95tKxr5ck6v8MAkcpOhCtg7l_MJmO01hYInA83GE8GESstrVwxC7e4yvGq4BchY-G1HXKvK1GurbkaJ1wrTs4YiLgFIdxsQ07BlnoSjPBB2VObbakGmECtjx-ZU3axHfDgCEP4_hhZHeax1NFD1abx8eEAxIVfnqMYkm-fiYcGitSSViDT',
            membershipLevel: 'Thành viên Vàng',
            phone: '0987 *** 123',
            createdAt: new Date().toISOString()
        };

        setUser(mockUser);
        return { success: true, user: mockUser };
    };

    const register = (userData) => {
        // TODO: Replace with actual API call
        // For now, simulate registration
        const newUser = {
            id: Date.now(),
            email: userData.email,
            name: userData.fullName,
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCef7pJfqmrFZSLWpZUaOPyzFr3Gz-76zdygyEgJG4z6H6Rguhj01Oyx2ZPhGz28vfgV6uz7zb4uom6dX7OSe8sivYnh95tKxr5ck6v8MAkcpOhCtg7l_MJmO01hYInA83GE8GESstrVwxC7e4yvGq4BchY-G1HXKvK1GurbkaJ1wrTs4YiLgFIdxsQ07BlnoSjPBB2VObbakGmECtjx-ZU3axHfDgCEP4_hhZHeax1NFD1abx8eEAxIVfnqMYkm-fiYcGitSSViDT',
            membershipLevel: 'Thành viên Mới',
            phone: '',
            createdAt: new Date().toISOString()
        };

        setUser(newUser);
        return { success: true, user: newUser };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    const updateProfile = (userData) => {
        const updatedUser = { ...user, ...userData };
        setUser(updatedUser);
        return { success: true, user: updatedUser };
    };

    const value = {
        user,
        isAuthenticated,
        login,
        register,
        logout,
        updateProfile
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
