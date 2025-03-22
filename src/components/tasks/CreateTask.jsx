import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateTask() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: new Date(),
    category: 'work',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle task creation logic here
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Task</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Title
            </label>
            <input
              type="text"
              className="input-field"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              className="input-field"
              value={task.category}
              onChange={(e) => setTask({ ...task, category: e.target.value })}
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="study">Study</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due Date
            </label>
            <DatePicker
              selected={task.date}
              onChange={(date) => setTask({ ...task, date })}
              className="input-field"
              dateFormat="MMMM d, yyyy"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="input-field min-h-[100px]"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;