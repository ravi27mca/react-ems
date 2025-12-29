import React, { useState } from 'react';
import {
    LayoutDashboard, Users, GraduationCap, Building2,
    CalendarCheck, Settings, ChevronLeft, ChevronRight
} from 'lucide-react'; // Import icons

import KeycloakService from '../../services/KeycloakService.js';
import StudentList from '../student/StudentList.jsx';
import EmployeeList from '../employee/EmployeeList.jsx';
import Attendance from '../attendance/Attendance.jsx';
import SettingsComp from '../settings/Settings.jsx';
import DepartmentList from '../department/DepartmentList.jsx';
import Header from '../header/Header.jsx';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    // State to handle sidebar collapse
    const [isCollapsed, setIsCollapsed] = useState(false);

    const user = KeycloakService.getUserInfo();

    // Added 'icon' property to each menu item
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'employees', label: 'Employees', icon: Users },
        { id: 'students', label: 'Students', icon: GraduationCap },
        { id: 'department', label: 'Department', icon: Building2 },
        { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <div className="flex pt-16 flex-1">
                {/* 2. SIDEBAR (Dynamic width based on state) */}
                <aside className={`fixed left-0 h-[calc(100vh-64px)] bg-white border-r border-gray-200 hidden md:block transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>

                    <div className="p-4 flex flex-col h-full">
                        {/* Collapse Toggle Button */}
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="flex items-center justify-center p-2 mb-4 text-gray-500 hover:bg-gray-100 rounded-lg border border-gray-100 transition-colors"
                        >
                            {isCollapsed ? <ChevronRight size={20} /> : <div className="flex items-center gap-2"><ChevronLeft size={20} /><span className="text-xs font-bold uppercase">Collapse</span></div>}
                        </button>

                        <nav className="space-y-2">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`flex items-center gap-4 w-full p-3 rounded-lg font-medium transition-all ${activeTab === item.id
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                        title={isCollapsed ? item.label : ""} // Shows name on hover when collapsed
                                    >
                                        <Icon size={22} className={activeTab === item.id ? 'text-blue-600' : 'text-gray-400'} />

                                        {/* Show text only if NOT collapsed */}
                                        {!isCollapsed && <span className="truncate">{item.label}</span>}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* 3. MAIN CONTENT (Margin adjusts based on sidebar state) */}
                <main className={`flex-1 p-6 transition-all duration-300 ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
                    {activeTab === 'dashboard' && (
                        <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.firstName}</h2>
                            <p className="text-gray-500 mt-2">Manage your institution from here.</p>
                        </div>
                    )}
                    {activeTab === 'employees' && <EmployeeList />}
                    {activeTab === 'students' && <StudentList />}
                    {activeTab === 'department' && <DepartmentList />}
                    {activeTab === 'attendance' && <Attendance />}
                    {activeTab === 'settings' && <SettingsComp />}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;