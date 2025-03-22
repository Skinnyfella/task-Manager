import { useState } from 'react';
import { FaBell, FaTimes } from 'react-icons/fa';

function NotificationsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Task Due Soon',
      message: 'Project presentation is due in 2 hours',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Task Completed',
      message: 'You completed the website redesign task',
      time: '4 hours ago',
    },
    {
      id: 3,
      title: 'New Task Assigned',
      message: 'Alex assigned you a new task',
      time: '1 day ago',
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 p-2 bg-white rounded-full shadow-sm"
      >
        <FaBell className="text-gray-600" />
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-gray-600" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-3 bg-gray-50 rounded-lg space-y-1"
              >
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NotificationsPanel;