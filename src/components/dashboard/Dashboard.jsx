import React, { useState } from 'react';
import KeycloakService from '../../services/KeycloakService.js';
import StudentList from '../student/StudentList.jsx';
import EmployeeList from '../employee/EmployeeList.jsx';
import Attendance from '../attendance/Attendance.jsx';
import Settings from '../settings/Settings.jsx';
import DepartmentList from '../department/DepartmentList.jsx';
import Header from '../header/Header.jsx';

const Dashboard = () => {
    // 1. Manage which tab is visible
    const [activeTab, setActiveTab] = useState('dashboard');

    // 2. Get User Information from Keycloak
    const user = KeycloakService.getUserInfo();

    // 3. Define the list of menu items
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
            {/* 1. USE THE NEW HEADER COMPONENT */}
            <Header />

            <div className="flex pt-16 flex-1">
                {/* 2. SIDEBAR */}
                <aside className="fixed left-0 w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200 hidden md:block">
                    <nav className="p-4 space-y-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`block w-full text-left p-3 rounded-lg font-medium transition-colors ${activeTab === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* 3. MAIN CONTENT */}
                <main className="flex-1 md:ml-64 p-6">
                    {activeTab === 'dashboard' && <div className="p-8 bg-white rounded-xl shadow-sm">Dashboard Content</div>}
                    {activeTab === 'employees' && <EmployeeList />}
                    {activeTab === 'students' && <StudentList />}
                    {activeTab === 'department' && <DepartmentList />}
                    {activeTab === 'attendance' && <Attendance />}
                    {activeTab === 'settings' && <Settings />}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;