// src/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" w-64 h-full bg-gray-800 text-white p-4 hidden md:block">
      <h2 className="text-lg font-bold">Navegación</h2>
      <ul>
        <li>
          <Link to="/" className="block py-2 hover:bg-gray-700">Inicio</Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 hover:bg-gray-700">Acerca de</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
