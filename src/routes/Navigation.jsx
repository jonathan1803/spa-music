import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch, faBell, faDownload, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, NavLink, Route, Routes, useNavigate,  } from 'react-router-dom';
// import Sidebar from '../componetns/Sidebar';
import { HomePage } from '../pages/HomePage';
import { Login } from '../componetns/Login';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para manejar autenticación



// Leer el estado de autenticación desde localStorage al cargar el componente
useEffect(() => {
  const storedAuth = localStorage.getItem('isAuthenticated');
  if (storedAuth === 'true') {
    setIsAuthenticated(true);
  }
}, []);

// Función para manejar el inicio de sesión
const handleLogin = () => {
  setIsAuthenticated(true);
  localStorage.setItem('isAuthenticated', 'true'); // Guardar en localStorage

};

// Función para manejar el cierre de sesión
const handleLogout = () => {
  setIsAuthenticated(false);
  localStorage.removeItem('isAuthenticated'); // Eliminar de localStorage
 
};

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <nav className="fixed col-span-full top-0 left-0 w-full z-50 bg-black text-white p-4 flex items-center justify-between">
        {/* Izquierda: Logo e ícono de Home */}
        <NavLink to="/" className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn-knihf.nitrocdn.com/ibKONdxVNJApfXYlVVFSuGXgWUgPJrvN/assets/images/optimized/rev-b3f5639/kodigowebstorage.blob.core.windows.net/kodigowebsite/2023/11/logo-1.webp"
              alt="Spotify"
              className="h-5"
            />
            <span className="text-sm">MUSIC</span>
          </div>
          {/* Home Icon */}
          <div className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </div>
        </NavLink>

        {/* Botón de menú hamburguesa (visible en móviles) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Centro: Barra de búsqueda (oculta en móviles) */}
        <div className="hidden md:flex items-center bg-gray-800 p-2 rounded-full w-1/2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          <input
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="¿Qué quieres reproducir?"
            className="bg-transparent text-white ml-2 outline-none w-full"
          />
        </div>

        <div className="hidden md:flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout} className="bg-white text-black py-1 px-4 rounded-full hover:bg-gray-200">
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavLink to="/login">
            <button className="bg-white text-black py-1 px-4 rounded-full hover:bg-gray-200">
              Iniciar sesión
            </button>
          </NavLink>
        )}
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-4">
          {/* Barra de búsqueda en móviles */}
          <div className="flex items-center bg-gray-800 p-2 rounded-full">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <input
              type="text"
              placeholder="¿Qué quieres reproducir?"
              className="bg-transparent text-white ml-2 outline-none w-full"
            />
          </div>

          {/* Botones y Perfil en móviles */}
          <div className="flex flex-col space-y-4">
            <NavLink to="/premium" onClick={() => setIsMenuOpen(false)}>
              <span className="block bg-white text-black py-2 px-4 rounded-full text-center hover:bg-gray-200">
                Descubrir Premium
              </span>
            </NavLink>

            <NavLink to="/instalar" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gray-800 py-2 px-4 rounded-full hover:bg-gray-700 flex items-center justify-center space-x-2">
                <FontAwesomeIcon icon={faDownload} />
                <span>Instalar app</span>
              </button>
            </NavLink>

            <button className="w-full bg-gray-800 py-2 px-4 rounded-full hover:bg-gray-700 flex items-center space-x-2">
              <FontAwesomeIcon icon={faBell} />
              <span>Notificaciones</span>
            </button>

            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-center space-x-2">
                <div className="rounded-full overflow-hidden w-10 h-10">
                  <img
                    src="https://via.placeholder.com/40" // Cambia esto por la URL real del avatar
                    alt="Profile"
                    className="w-full h-full"
                  />
                </div>
                <span>Perfil</span>
              </div>
            </NavLink>
          </div>
        </div>
      )}
     
        {/* Contenido principal */}
        <div className=" pt-16 overflow-y-auto h-screen bg-[#0E0C1A]">
    <Routes>
      <Route path="/" element={<HomePage searchValue={searchValue} />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/lazy3" element={<div>Lazy 3 Page</div>} />
      <Route path="/instalar" element={<div>Instalar App Page</div>} />
    </Routes>
 
</div>

  
     
    </BrowserRouter>
  );
};

export default Navigation;
