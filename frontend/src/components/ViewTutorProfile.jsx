import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState([]);
    useEffect(() => {
        // Fetch posts from the backend API
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/tutor/${tutorId}`);
                const data = await response.json();
                setTutor(data);
            } catch (error) {
                console.error("Error fetching tutor:", error);
            }
        };
        fetchData();
    }, []);

    // Fetch tutor data using tutorId here, or display static content for now.
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center shadow p-5">
                {/* Teacher Photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full overflow-hidden">
                    <img
                        src={tutor.photo}
                        alt="https://via.placeholder.com/150"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Teacher Details */}
                <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-2xl font-bold">{tutor.name}</h2>
                </div>
                <div className='m-auto'>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                    >
                        Message
                    </button>
                </div>
            </div>

            {/* Profile Information */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                        <h4 className="text-lg font-medium text-gray-700">Email</h4>
                        <p className="text-gray-600">{tutor.email}</p>
                    </div>

                    {/* Contact Number */}
                    <div>
                        <h4 className="text-lg font-medium text-gray-700">Contact Number</h4>
                        <p className="text-gray-600">{tutor.contactNumber}</p>
                    </div>

                    {/* Qualification */}
                    <div>
                        <h4 className="text-lg font-medium text-gray-700">Qualification</h4>
                        <p className="text-gray-600">{tutor.qualification}</p>
                    </div>

                    {/* Experience */}
                    <div>
                        <h4 className="text-lg font-medium text-gray-700">Experience</h4>
                        <p className="text-gray-600">{tutor.experience}</p>
                    </div>
                    {/* Experience */}
                    <div>
                        <h4 className="text-lg font-medium text-gray-700">Location</h4>
                        <p className="text-gray-600">{tutor.location}</p>
                    </div>

                </div>
            </div>

            {/* Demo Video */}
            {tutor.demoVideo ? (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">Demo Video</h2>
                    <video src={tutor.demoVideo} controls className="w-full rounded-lg shadow"></video>
                </div>
            ) : (
                <p className="text-sm text-gray-500 italic mt-4">No demo video available</p>
            )}
        </div>
    );
}

export default ProfilePage;