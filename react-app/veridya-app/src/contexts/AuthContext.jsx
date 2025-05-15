import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar token no localStorage ao carregar
    // const token = localStorage.getItem('token');
    // const userData = localStorage.getItem('user');
    
    // if (token && userData) {
    //   setIsAuthenticated(true);
    //   setUser(JSON.parse(userData));
    // }
    setIsAuthenticated(true);
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Chamada à API de login
    //   const response = await authService.login(credentials);
      
    //   localStorage.setItem('token', response.token);
    //   localStorage.setItem('user', JSON.stringify(response.user));
      
    //   setIsAuthenticated(true);
    //   setUser(response.user);
      
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}