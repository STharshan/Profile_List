import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setSearchQuery } from "../store/ProfileSlice";

/* that profile data are get from your apiendpoint 
  because your api end point is give only all client data 
  that backend haven't specific profile details api endpoint
*/ 

const profiles = [
  {
    "client_id": "3qmCKRqXr06udbChynui",
    "client_name": "AliceJohnson",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "+94775567987",
    "client_profile_url": "https://backend.graycorp.io/images/img1.jpg"
  },
  {
    "client_id": "BXiLpmj4WJv82yRLdy9R",
    "client_name": "PattCummins",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "+947736592581",
    "client_profile_url": "https://backend.graycorp.io/images/pat 1.jpg"
  },
  {
    "client_id": "E0JFHhK2x6Gq2Ac6XSyP",
    "client_name": "JohnAbraham",
    "client_city": "jaffna ",
    "client_dob": null,
    "client_mobile": "+94768835964",
    "client_profile_url": "https://backend.graycorp.io/images/vjpi"
  },
  {
    "client_id": "E7YlGBnankZEg54OgRfY",
    "client_name": "MikeTyson",
    "client_city": "colombo",
    "client_dob": null,
    "client_mobile": "0775588465",
    "client_profile_url": "https://backend.graycorp.io/images/1.jpeg"
  },
  {
    "client_id": "EDBjVP7QmoCdBO4a9Y7X",
    "client_name": "VinoKhan",
    "client_city": "jaffna",
    "client_dob": null,
    "client_mobile": "776302562",
    "client_profile_url": "https://backend.graycorp.io/images/2.jpg"
  },
  {
    "client_id": "J6SNjRd4P3WvV78EFddP",
    "client_name": "ViratKholi",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "+911595745925",
    "client_profile_url": "https://backend.graycorp.io/images/vk"
  },
  {
    "client_id": "OGASQQ2EthjbQuUszl3c",
    "client_name": "MikeMichel",
    "client_city": "jaffna",
    "client_dob": null,
    "client_mobile": "0778855475",
    "client_profile_url": "https://backend.graycorp.io/images/3.png"
  },
  {
    "client_id": "SYfMHh6YUL6yobmIZXwO",
    "client_name": "SmritiMandhana",
    "client_city": "jaffna",
    "client_dob": null,
    "client_mobile": "+18456286515",
    "client_profile_url": "https://backend.graycorp.io/images/image_cropper_1738558662462.jpg"
  },
  {
    "client_id": "SqyT7RFEZWakUnn6hgav",
    "client_name": "Michal Rayyapan",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "768855995",
    "client_profile_url": "https://backend.graycorp.io/images/4.png"
  },
  {
    "client_id": "TWMeJE1FwrkDR6lJTkGN",
    "client_name": "Randyortan",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "+94771254687",
    "client_profile_url": "https://backend.graycorp.io/images/randy gl1.png"
  },
  {
    "client_id": "VIWP1RBrcLluTbEuJAZG",
    "client_name": "SmritiMandhana",
    "client_city": "kolkata",
    "client_dob": null,
    "client_mobile": "+917539513946",
    "client_profile_url": "https://backend.graycorp.io/images/smir.png"
  },
  {
    "client_id": "WKtLDPvZQQibpTE8xzhh",
    "client_name": "RohitSharma",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "+916541531165",
    "client_profile_url": "https://backend.graycorp.io/images/rohit"
  },
  {
    "client_id": "X22DGT4UDrDpnZVdWV3x",
    "client_name": "HardikPandya",
    "client_city": "Colombo",
    "client_dob": null,
    "client_mobile": "+94888888888",
    "client_profile_url": "https://backend.graycorp.io/images/pandya pro.png"
  },
  {
    "client_id": "aucB1dxgcYy6mwoKfK7R",
    "client_name": "Ethan Henry",
    "client_city": "Jaffna",
    "client_dob": null,
    "client_mobile": "764857951",
    "client_profile_url": "https://backend.graycorp.io/images/5.png"
  },
  {
    "client_id": "bjWVZVjpkRsjbP60k2Lm",
    "client_name": "JohnDoe",
    "client_city": "Jaffna",
    "client_dob": null,
    "client_mobile": "1234567890",
    "client_profile_url": "https://backend.graycorp.io/images/man-33.jpg"
  },
  {
    "client_id": "eW9KDOxknMwzr8WFTNrO",
    "client_name": "zuginWanne",
    "client_city": "jaffna",
    "client_dob": null,
    "client_mobile": "+94774852889",
    "client_profile_url": "https://backend.graycorp.io/images/ki9snm0ase.jpg"
  },
  {
    "client_id": "i0lkFzpYjk6ADk8sObUr",
    "client_name": "AustrinBiber",
    "client_city": "jaffna",
    "client_dob": null,
    "client_mobile": "+94778741623",
    "client_profile_url": "https://backend.graycorp.io/images/7.png"
  },
  {
    "client_id": "l2imwHUQ0ADdvMsyjNld",
    "client_name": "JohnWhick",
    "client_city": null,
    "client_dob": null,
    "client_mobile": "765544875",
    "client_profile_url": "https://backend.graycorp.io/images/8.png"
  }
];

const ProfileDetails = () => {
  const { id } = useParams(); // Get profile ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();// Get the dispatch function to Reset search query

  /*
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://backend.graycorp.io:9000/mymate/api/v1/tempClients/${id}`)
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
*/

  // Find profile by client_id
  const profile = profiles.find((p) => p.client_id === id);

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">Profile not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Details</h1>
        <img
          src={profile.client_profile_url}
          alt={profile.client_name}
          className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-md mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-900">{profile.client_name}</h2>
        <p className="text-lg text-gray-700 mt-2"><strong>Contact:</strong> {profile.client_mobile}</p>
        <p className="text-lg text-gray-700 mt-1"><strong>City:</strong> {profile.client_city}</p>
        <button 
          onClick={() => {
            dispatch(setSearchQuery("")); // Reset search query
            navigate("/"); // Navigate back to profile list
          }}
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to Profiles
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;