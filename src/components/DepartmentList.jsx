import React from 'react';

const DepartmentList = () => {
    const departments = [
        { id: 1, name: 'Engineering', head: 'Dr. Arshad', staffCount: 45, status: 'Active' },
        { id: 2, name: 'Human Resources', head: 'Sarah Jenkins', staffCount: 12, status: 'Active' },
        { id: 3, name: 'Marketing', head: 'Michael Chen', staffCount: 28, status: 'On Leave' },
        { id: 4, name: 'Finance', head: 'Robert Frost', staffCount: 15, status: 'Active' },
    ];

    return (
        <div className="space-y-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Department Management</h2>
                    <p className="text-gray-500 text-sm">Organize and manage your organization's core units.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-md flex items-center gap-2">
                    <span className="text-xl">+</span> Add Department
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-400 uppercase font-bold">Total Units</p>
                    <p className="text-2xl font-bold text-gray-800">{departments.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-400 uppercase font-bold">Total Staff in Depts</p>
                    <p className="text-2xl font-bold text-blue-600">100</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-400 uppercase font-bold">Active Status</p>
                    <p className="text-2xl font-bold text-green-500">100%</p>
                </div>
            </div>

            {/* Department Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Dept Name</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Head of Dept</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Staff Count</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                            <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {departments.map((dept) => (
                            <tr key={dept.id} className="hover:bg-gray-50/50 transition">
                                <td className="p-4 font-medium text-gray-800">{dept.name}</td>
                                <td className="p-4 text-gray-600 text-sm">{dept.head}</td>
                                <td className="p-4 text-gray-600 text-sm">{dept.staffCount} Members</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${dept.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {dept.status}
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <button className="text-blue-500 hover:text-blue-700 mr-3 text-sm font-medium">Edit</button>
                                    <button className="text-red-400 hover:text-red-600 text-sm font-medium">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepartmentList;