import React, { useState } from 'react';

const StudentRegistrationForm = () => {
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: null,
        course: '',
        subject: '',
        location: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            photo: file,
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Here you can add form submission logic (e.g., API call)
        setFormData({
            name: '',
            email: '',
            password: '',
            course: '',
            subject: '',
            location: '',
            photo: null,
        })
        setAvatarPreview(null);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Student Registration Form</h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                    />
                </div>

                {/* password */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Choose a password"
                        required
                    />
                </div>

                {/* Photo */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="photo">
                        Photo
                    </label>
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                {avatarPreview && (
                    <div className="mt-4">
                        <img
                            src={avatarPreview}
                            alt="Avatar Preview"
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                    </div>
                )}

                {/* Course/Class */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="course">
                        Course/Class
                    </label>
                    <input
                        type="text"
                        name="course"
                        id="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your course or class"
                    />
                </div>

                {/* Subject */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your subject"
                    />
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your location"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentRegistrationForm;
