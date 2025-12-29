import React from 'react';

const Attendance = () => {
    // Sample Attendance Data
    const attendanceData = [
        { id: 1, name: "Ravi Kumar", date: "27 Dec 2025", checkIn: "09:05 AM", checkOut: "06:15 PM", status: "On Time" },
        { id: 2, name: "Anjali Singh", date: "27 Dec 2025", checkIn: "09:45 AM", checkOut: "06:30 PM", status: "Late" },
        { id: 3, name: "John Doe", date: "27 Dec 2025", checkIn: "---", checkOut: "---", status: "Absent" },
        { id: 4, name: "Priya Varma", date: "27 Dec 2025", checkIn: "08:55 AM", checkOut: "05:00 PM", status: "On Time" },
    ];

    return (
        <div className="space-y-6">
            {/* Header and Quick Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Attendance Management</h2>
                    <p className="text-sm text-gray-500">Track daily clock-in/out and working hours.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm">
                        Check In
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm">
                        Check Out
                    </button>
                </div>
            </div>

            {/* Attendance Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase">Present Today</p>
                    <p className="text-2xl font-bold text-green-600">85</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase">Late Arrivals</p>
                    <p className="text-2xl font-bold text-orange-500">08</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase">On Leave</p>
                    <p className="text-2xl font-bold text-blue-500">04</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase">Absentees</p>
                    <p className="text-2xl font-bold text-red-500">12</p>
                </div>
            </div>

            {/* Attendance Log Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-50 flex justify-between items-center">
                    <h3 className="font-bold text-gray-700">Daily Log: Dec 27, 2025</h3>
                    <input type="date" className="border rounded-lg px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                            <tr>
                                <th className="p-4">Employee</th>
                                <th className="p-4">Check In</th>
                                <th className="p-4">Check Out</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {attendanceData.map((log) => (
                                <tr key={log.id} className="hover:bg-gray-50/50 transition">
                                    <td className="p-4">
                                        <p className="font-medium text-gray-800">{log.name}</p>
                                        <p className="text-[10px] text-gray-400">ID: EMP0{log.id}</p>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600 font-mono">{log.checkIn}</td>
                                    <td className="p-4 text-sm text-gray-600 font-mono">{log.checkOut}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${log.status === 'On Time' ? 'bg-green-100 text-green-700' :
                                            log.status === 'Late' ? 'bg-orange-100 text-orange-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {log.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="text-gray-400 hover:text-blue-600">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                        </button>
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

export default Attendance;