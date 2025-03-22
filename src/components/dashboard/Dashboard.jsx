import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCheckCircle, FaBriefcase, FaUser, FaBook } from 'react-icons/fa';

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const categories = [
    { id: 1, name: 'Work', icon: FaBriefcase, count: 5 },
    { id: 2, name: 'Personal', icon: FaUser, count: 3 },
    { id: 3, name: 'Study', icon: FaBook, count: 2 },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center mb-8">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, Alex!
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Task Progress</h2>
            <FaCheckCircle className="text-primary-500 text-xl" />
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-100">
              <div
                style={{ width: "70%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
              ></div>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-gray-600">
                7/10 tasks completed
              </span>
            </div>
          </div>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">{category.name}</h2>
              <category.icon className="text-primary-500 text-xl" />
            </div>
            <p className="text-3xl font-bold text-gray-800">{category.count}</p>
            <p className="text-sm text-gray-600">Active tasks</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Schedule Tasks</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Dashboard;