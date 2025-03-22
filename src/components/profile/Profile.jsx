import { FaCheckCircle, FaClock, FaCalendarCheck } from 'react-icons/fa';

function Profile() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Alex Johnson</h1>
            <p className="text-gray-600">alex@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaCheckCircle className="text-primary-500" />
              <h3 className="font-semibold">Completed Tasks</h3>
            </div>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaClock className="text-primary-500" />
              <h3 className="font-semibold">In Progress</h3>
            </div>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaCalendarCheck className="text-primary-500" />
              <h3 className="font-semibold">On Time Completion</h3>
            </div>
            <p className="text-2xl font-bold">92%</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
              Edit Profile
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
              Change Password
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50">
              Notification Settings
            </button>
            <button className="w-full text-left px-4 py-2 text-red-600 rounded-lg hover:bg-red-50">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;