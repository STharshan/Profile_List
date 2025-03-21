import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProfileCard = ({ profile }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full h-72 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={profile.client_profile_url}
        alt={profile.client_name}
        className="w-32 h-32 rounded-full mb-4 border-4 border-blue-400"
      />
      <h2 className="text-xl font-semibold text-center text-gray-800">
        {profile.client_name}
      </h2>
      <div className="text-center mt-2">
        <Link to={`/profile/${profile.client_id}`}>
          <button className="mt-3 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
