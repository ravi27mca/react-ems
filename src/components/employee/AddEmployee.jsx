import React, { useState } from 'react';

const AddEmployee = ({ onCancel }) => {
    // 1. State for Form Data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dept: 'Engineering',
        role: ''
    });

    // 2. State for Error Messages
    const [errors, setErrors] = useState({});

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // 3. Validation Logic
    const validate = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required";
        } else if (formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.role.trim()) {
            newErrors.role = "Job Role is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // returns true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Data Submitted:", formData);
            alert("Employee Saved Successfully!");
            onCancel(); // Close form after success
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto mt-10">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Add New Employee</h2>
                <p className="text-sm text-gray-500">Enter the personal and professional details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. John Doe"
                            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Dept Select */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Department</label>
                        <select
                            name="dept"
                            value={formData.dept}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>HR</option>
                            <option>Finance</option>
                        </select>
                    </div>

                    {/* Role Input */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Job Role</label>
                        <input
                            name="role"
                            type="text"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="e.g. Developer"
                            className={`w-full border ${errors.role ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                    </div>
                </div>

                <div className="pt-4 flex gap-3">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
                    >
                        Save Employee
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-100 text-gray-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;