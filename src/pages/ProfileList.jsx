import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles, setSearchQuery } from "../store/ProfileSlice";
import ProfileCard from "../components/ProfileCard";

const ProfileList = () => {
  const dispatch = useDispatch();
  const { data, status, error, searchQuery } = useSelector((state) => state.profiles);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 6;

  // The search input
  const searchInputRef = useRef();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProfiles());
    }
  }, [status, dispatch]);

  // Filter the entire dataset based on the search query
  const filteredProfiles = data.filter((profile) =>
    profile.client_name.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  // Apply pagination to the filtered results
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Profile List</h1>
      
      {/* Search Input */}
      <input
        ref={searchInputRef} // Assign ref to input
        type="text"
        placeholder="Search profiles..."
        className="border p-3 mb-6 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => {
          dispatch(setSearchQuery(e.target.value));
          setCurrentPage(1);
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProfiles.length > 0 ? (
          currentProfiles.map((profile) => (
            <ProfileCard key={profile.client_id} profile={profile} />
          ))
        ) : (
          <div className="col-span-1 md:col-span-3 text-center text-gray-500 flex flex-col items-center justify-center h-64">
            <p className="text-2xl font-semibold">No profiles found.</p>
            <p className="text-lg mt-2">Try adjusting your search or check back later.</p>
            <button
              onClick={() => {
                dispatch(setSearchQuery("")); // Reset Redux search state
                setCurrentPage(1); // Reset to page 1
                if (searchInputRef.current) {
                  searchInputRef.current.value = ""; // Clear input field
                }
              }}
              className="mt-4 inline-block px-3 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md disabled:bg-gray-300 transition-transform transform hover:scale-105"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-lg font-medium text-gray-700">Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md disabled:bg-gray-300 transition-transform transform hover:scale-105"
          disabled={indexOfLastProfile >= filteredProfiles.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileList;
