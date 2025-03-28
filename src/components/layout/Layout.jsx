import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import NotificationsPanel from './NotificationsPanel';

function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <NotificationsPanel />
    </div>
  );
}

export default Layout;