import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: '/', icon: FaHome, label: 'Dashboard' },
    { to: '/create-task', icon: FaPlus, label: 'Create Task' },
    { to: '/profile', icon: FaUser, label: 'Profile' },
  ];

  return (
    <div className="w-64 bg-white h-full shadow-sm">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary-600">TaskMaster</h1>
      </div>
      <nav className="mt-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center space-x-2 px-6 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-600 ${
              location.pathname === link.to ? 'bg-primary-50 text-primary-600' : ''
            }`}
          >
            <link.icon />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;