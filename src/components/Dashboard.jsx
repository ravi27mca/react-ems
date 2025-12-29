import React, { useState } from 'react';
import StudentList from './StudentList.jsx';
import EmployeeList from './EmployeeList.jsx';
import Attendance from './Attendance.jsx';
import Settings from './Settings.jsx';
import DepartmentList from './DepartmentList.jsx';

const Dashboard = () => {
    // 1. Manage which tab is visible
    const [activeTab, setActiveTab] = useState('dashboard');

    // 2. Define the list of menu items
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'employees', label: 'Employees' },
        { id: 'students', label: 'Students' },
        { id: 'department', label: 'Department' },
        { id: 'attendance', label: 'Attendance' },
        { id: 'settings', label: 'Settings' }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            {/* 1. HEADER (Fixed) */}
            <header className="fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
                <div className="text-xl font-bold text-blue-600">React-EMS</div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 font-medium">Welcome, Admin</span>
                    <img className="w-8 h-8 rounded-full border" src="https://ui-avatars.com/api/?name=Admin" alt="user" />
                </div>
            </header>

            <div className="flex pt-16 flex-1">
                {/* 2. SIDEBAR (Fixed) */}
                <aside className="fixed left-0 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200 hidden md:block">
                    <nav className="p-4 space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`block w-full text-left p-3 rounded-lg font-medium transition-colors ${activeTab === item.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* 3. MAIN BODY */}
                <main className="flex-1 md:ml-64 p-6 min-h-[calc(100vh-128px)]">
                    {/* Conditional Rendering based on activeTab */}
                    {activeTab === 'dashboard' && (
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
                            <p className="text-gray-500">Welcome to your management system overview.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="p-4 bg-blue-100 rounded-lg">Total Employees: 120</div>
                                <div className="p-4 bg-green-100 rounded-lg">Active Students: 450</div>
                                <div className="p-4 bg-purple-100 rounded-lg">Departments: 8</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'employees' && <EmployeeList />}
                    {activeTab === 'students' && <StudentList />}
                    {activeTab === 'department' && <DepartmentList />}
                    {activeTab === 'attendance' && <Attendance />}
                    {activeTab === 'settings' && <Settings />}
                </main>
            </div>

            {/* 4. FOOTER */}
            <footer className="md:ml-64 bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
                &copy; 2025 Employee Management System. All rights reserved.
            </footer>

        </div>
    );
}

export default Dashboard;