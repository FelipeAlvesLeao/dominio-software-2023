import React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    // Tente obter o userId do localStorage ao iniciar
    const initialUserId = localStorage.getItem('userId');
    const [userId, setUserId] = React.useState(initialUserId);

    const login = (id) => {
        setUserId(id);
        // Salve o userId no localStorage ao fazer login
        localStorage.setItem('userId', id);
    };

    const logout = () => {
        setUserId(null);
        // Remova o userId do localStorage ao fazer logout
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};