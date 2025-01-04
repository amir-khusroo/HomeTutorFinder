import React, { useState } from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
const API_URL = import.meta.env.VITE_API_URL;

const TutorRegistrationForm = () => {
    const [avatarPreview, setAvatarPreview] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: null,
        contactNumber: '',
        qualification: '',
        experience: '',
        subjectExpert: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePhotoChange = (e) => {
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
        // Handle form submission logic (e.g., API call) here
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('contactNumber', formData.contactNumber);
        data.append('qualification', formData.qualification);
        data.append('experience', formData.experience);
        data.append('subjectExpert', formData.subjectExpert);
        data.append('location', formData.location);
        if (formData.photo) {
            data.append('photo', formData.photo);
        }

        axios.post(`${API_URL}/tutor/register`, data).then((resp) => {
            console.log(resp.data.message)
            toast.success(resp.data.message)
            navigate('/login');
        }).catch((err) => {
            toast.error(err.response.data.message)
            console.log(err.response.data.message)
        })

        setFormData({
            name: '',
            email: '',
            password: '',
            photo: null,
            contactNumber: '',
            qualification: '',
            experience: '',
            subjectExpert: '',
            location: '',
        });
        setAvatarPreview(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto p-8">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center">Tutor Registration Form</h2>

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
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className='flex gap-3'>
                        {/* Photo */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" htmlFor="photo">
                                Upload Photo
                            </label>
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
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
                    </div>

                    {/* Contact Number */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            name="contactNumber"
                            id="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your contact number"
                        />
                    </div>

                    {/* Qualification */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="qualification">
                            Qualification
                        </label>
                        <input
                            type="text"
                            name="qualification"
                            id="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your qualification"
                        />
                    </div>

                    {/* Experience */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="experience">
                            Experience (in years)
                        </label>
                        <input
                            type="number"
                            name="experience"
                            id="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your experience"
                        />
                    </div>


                    {/* Subject Expert */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="subjectExpert">
                            Subject Expertise
                        </label>
                        <input
                            type="text"
                            name="subjectExpert"
                            id="subjectExpert"
                            value={formData.subjectExpert}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your subject of expertise"
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
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your location"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring mt-2"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TutorRegistrationForm;
