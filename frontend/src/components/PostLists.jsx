import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;


const PostLists = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tutorInfo, setTutorInfo] = useState({});

    useEffect(() => {
        // Fetch posts from the backend API
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/tutor/getAllPost`);
                const data = await response.json();
                setPosts(data);

                // Fetch tutor names for each post
                const tutorIds = data.map((post) => post.tutor);
                const tutorData = await fetchTutors(tutorIds);
                setTutorInfo(tutorData);
            } catch (error) {
                console.error("Error fetching posts or tutor names:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchTutors = async (tutorIds) => {
        const tutors = {};
        await Promise.all(
            tutorIds.map(async (tutorId) => {
                try {
                    const response = await fetch(`${API_URL}/tutor/${tutorId}`);
                    const tutorData = await response.json();
                    tutors[tutorId] = tutorData;
                } catch (error) {
                    console.error(`Error fetching tutor name for ID ${tutorId}:`, error);
                }
            })
        );
        return tutors;
    };

    if (loading) {
        return <div>Loading...</div>; // Render loading state
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <h2 className="text-2xl font-bold mb-4">All Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post._id} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h1 className='font-bold flex gap-x-2 text-center'>
                                <img
                                    src={tutorInfo[post.tutor].photo || 'https://via.placeholder.com/50'} // Replace with default if avatar not present
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
                                />
                                {tutorInfo[post.tutor].name || "Loading..."} {/* Display tutor name or "Loading..." */}
                            </h1>
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-700">{post.description}</p>
                            <button
                                onClick={() => navigate(`/tutor/viewprofile/${post.tutor}`)}
                                className='bg-gray-600 text-white rounded-md p-3 mt-3'
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostLists;