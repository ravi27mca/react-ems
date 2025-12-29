import React, { useState } from 'react';
import KeycloakService from '../../services/KeycloakService';

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const user = KeycloakService.getUserInfo() || { name: 'User', email: '', roles: [] };

    const handleSignOut = (e) => {
        // Prevent the click from "falling through" to the background
        e.stopPropagation();
        console.log("Sign Out Button Clicked!");
        KeycloakService.doLogout();
    };

    return (
        <>
            {/* Header - Z-index 50 */}
            <header className="fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
                <div className="text-xl font-bold text-blue-600">React-EMS</div>

                <div className="relative">
                    {/* Profile Trigger */}
                    <div
                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-all"
                        onClick={() => setShowProfile(!showProfile)}
                    >
                        <div className="text-sm font-bold text-gray-800">{user.name}</div>
                        <img
                            className="w-10 h-10 rounded-full border-2 border-blue-100"
                            src={`https://ui-avatars.com/api/?name=${user.name}`}
                            alt="user"
                        />
                    </div>

                    {/* DROPDOWN MENU - Z-index 999 (Highest) */}
                    {showProfile && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[999]">
                            <div className="px-5 pb-3 border-b border-gray-100">
                                <p className="text-sm font-bold text-gray-800">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>

                            <div className="px-5 pt-3">
                                <button
                                    type="button"
                                    onClick={handleSignOut}
                                    className="w-full py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 cursor-pointer transition-all shadow-md active:scale-95"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* BACKGROUND OVERLAY - Z-index 40 (Lower than Dropdown) */}
            {showProfile && (
                <div
                    className="fixed inset-0 z-[40] bg-black/5"
                    onClick={() => setShowProfile(false)}
                />
            )}
        </>
    );
};

export default Header;