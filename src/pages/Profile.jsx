import React, { useState, useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser, updateUserProfile, loading } = useContext(AuthContex);
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {};
    if (username) updatedData.displayName = username;
    if (photoUrl) updatedData.photoURL = photoUrl;

    try {
      if (Object.keys(updatedData).length > 0) {
        await updateUserProfile(updatedData);

        setUser({ ...user, ...updatedData });

        toast.success("Profile updated successfully");
      } else {
        toast.info("Please provide a value for at least one field.");
      }
    } catch (error) {
      toast.error("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="profile-container mt-24 space-y-4">
      <h1 className="text-4xl font-bold text-[#003366] mb-6">
        USER INFORMATION
      </h1>
      <div className="avatar">
        <div className="w-48 rounded">
          <img src={user.photoURL} alt="User Profile" />
        </div>
      </div>

      <h1 className="text-2xl">Name: {user.displayName}</h1>
      <h3 className="text-2xl">Email: {user.email}</h3>

      <div>
        <h1 className="font-semibold text-2xl text-[#003366] mt-12">
          Update Profile:
        </h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                name="username"
                placeholder="Enter new name"
                className="input input-bordered"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter new photo URL"
                className="input input-bordered"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
