import React, { useState } from 'react';
import AddEmployee from './AddEmployee';

const EmployeeList = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    // Sample Data
    const employees = [
        { id: "EMP001", name: "Ravi Kumar", role: "Software Engineer", dept: "Engineering", email: "ravi@ems.com", status: "Active" },
        { id: "EMP002", name: "Anjali Singh", role: "HR Manager", dept: "Human Resources", email: "anjali@ems.com", status: "Active" },
        { id: "EMP003", name: "John Doe", role: "UI/UX Designer", dept: "Marketing", email: "john@ems.com", status: "On Leave" },
        { id: "EMP004", name: "Priya Varma", role: "Accounts Lead", dept: "Finance", email: "priya@ems.com", status: "Active" },
    ];

    if (showAddForm) {
        return <AddEmployee onCancel={() => setShowAddForm(false)} />;
    }
    return (
        <div className="space-y-6">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Employee Management</h2>
                    <p className="text-sm text-gray-500">View and manage all staff members in your organization.</p>
                </div>
                <button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition flex items-center gap-2 w-fit">
                    <span>+</span> Add New Employee
                </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search employees..."
                    className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="border border-gray-200 rounded-lg px-4 py-2 text-gray-600 focus:outline-none">
                    <option>All Departments</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                </select>
            </div>

            {/* Employee Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Employee</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Department</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Role</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                                <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {employees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-gray-50/80 transition">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${emp.name}&background=random`}
                                                className="w-10 h-10 rounded-full"
                                                alt="avatar"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-800">{emp.name}</p>
                                                <p className="text-xs text-gray-500">{emp.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">{emp.dept}</td>
                                    <td className="p-4 text-sm text-gray-600">{emp.role}</td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${emp.status === 'Active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-orange-100 text-orange-700'
                                            }`}>
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex justify-center gap-3">
                                            <button className="text-gray-400 hover:text-blue-600 transition">
                                                Edit
                                            </button>
                                            <button className="text-gray-400 hover:text-red-600 transition">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;