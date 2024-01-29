import React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = React.useState(null);

    const login = (id) => {
        setUserId(id);
    };

    const logout = () => {
        setUserId(null);
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
