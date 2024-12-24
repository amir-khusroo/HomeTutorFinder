import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindTutor = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [tutors, setTutors] = useState([]);
    const [subject, setSubject] = useState('');
    const [location, setLocation] = useState('');
    const [filteredTutors, setFilteredTutors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/tutor/getAllTutor');
                const data = await response.json();
                setTutors(data);
                setFilteredTutors(data); // Initialize filtered tutors with all tutors

            } catch (error) {
                console.error("Error fetching tutor:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const results = tutors.filter(tutor =>
            tutor.subjectExpert.toLowerCase().includes(subject.toLowerCase()) &&
            tutor.location.toLowerCase().includes(location.toLowerCase())
        );
        setFilteredTutors(results);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                <h2 className="text-2xl font-bold mb-4">All Tutors</h2>

                {/* Search Form */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="border p-2 mr-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Search by Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border p-2 mr-2 rounded"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Search
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredTutors.length > 0 ? (
                        filteredTutors.map((tutor) => (
                            <div key={tutor._id} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                                <h1 className='font-bold flex gap-x-2 text-center'>
                                    <img
                                        src={tutor.photo || 'https://via.placeholder.com/50'}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
                                    />
                                    {tutor.name || "Loading..."}
                                </h1>
                                <h3 className="text-xl mb-2"><b>Subject : </b>{tutor.subjectExpert}</h3>
                                <p className="text-xl text-gray-700"><b>Location : </b>{tutor.location}</p>
                                
                                <button
                                    onClick={() => navigate(`/tutor/viewprofile/${tutor._id}`)}
                                    className='bg-gray-600 text-white rounded-md p-3 mt-3'
                                >
                                    View Profile
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No tutors found matching your criteria.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindTutor;
