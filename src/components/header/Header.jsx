import React, { useState } from 'react';
import KeycloakService from '../../services/KeycloakService';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const user = KeycloakService.getUserInfo();

    return (
        <>
            <header className="fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
                <div className="text-xl font-bold text-blue-600">React-EMS</div>

                <div className="relative">
                    {/* Trigger: Name and Avatar */}
                    <div
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-all"
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <div className="text-right hidden sm:block">
                            <div className="text-sm font-bold text-gray-800 leading-tight">{user.name}</div>
                            <div className="text-xs text-gray-500">View Profile</div>
                        </div>
                        <img
                            className="w-10 h-10 rounded-full border-2 border-blue-100"
                            src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`}
                            alt="user"
                        />
                    </div>

                    {/* Dropdown Menu */}
                    {showProfile && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-[60]">
                            <div className="px-5 pb-3 border-b border-gray-100">
                                <p className="text-xs font-semibold text-gray-400 uppercase">User Information</p>
                                <p className="text-sm font-bold text-gray-800 mt-2">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>

                            <div className="px-5 py-3">
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Roles</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {user.roles.filter(r => !r.includes("default")).map(role => (
                                        <span key={role} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] rounded-full border border-blue-100">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="px-5 pt-3 border-t border-gray-100">
                                <button
                                    onClick={() => KeycloakService.doLogout()}
                                    className="w-full py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Overlay to close dropdown when clicking outside */}
            {showProfile && (
                <div className="fixed inset-0 z-[55]" onClick={() => setShowProfile(false)}></div>
            )}
        </>
    );
};

export default Header;