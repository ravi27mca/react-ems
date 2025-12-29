import React from 'react';

const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Page Header */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800">System Settings</h2>
                <p className="text-sm text-gray-500">Manage your account preferences and system configuration.</p>
            </div>

            {/* Profile Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                    <h3 className="font-bold text-gray-700">Admin Profile</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-6 mb-6">
                        <img
                            src="https://ui-avatars.com/api/?name=Admin&size=128"
                            className="w-20 h-20 rounded-full border-2 border-blue-100"
                            alt="Admin"
                        />
                        <button className="text-sm bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
                            Change Avatar
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                            <input type="text" className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="System Admin" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                            <input type="email" className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="admin@ems-portal.com" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-50">
                    <h3 className="font-bold text-gray-700">Notifications</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-800">Email Notifications</p>
                            <p className="text-xs text-gray-500">Receive daily attendance reports via email.</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 accent-blue-600" defaultChecked />
                    </div>
                    <hr className="border-gray-50" />
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-800">Security Alerts</p>
                            <p className="text-xs text-gray-500">Get notified of unusual login attempts.</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 accent-blue-600" defaultChecked />
                    </div>
                </div>
            </div>

            {/* System Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-50">
                    <h3 className="font-bold text-gray-700">System Preferences</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Default Language</label>
                        <select className="w-full md:w-64 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50">
                            <option>English (US)</option>
                            <option>Hindi</option>
                            <option>Spanish</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
                <button className="px-6 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
                    Cancel
                </button>
                <button className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md transition">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;