import React from 'react'

const StudentList = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Student Management</h2>
            <p className="text-gray-500 mb-6">View and manage all enrolled students.</p>

            {/* Example Table */}
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                    <tr>
                        <th className="p-4 border-b">ID</th>
                        <th className="p-4 border-b">Name</th>
                        <th className="p-4 border-b">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="p-4 border-b">#S001</td>
                        <td className="p-4 border-b font-medium">Rahul Sharma</td>
                        <td className="p-4 border-b">10th A</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentList