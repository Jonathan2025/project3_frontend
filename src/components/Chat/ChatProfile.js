import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Chat from "./Chat";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>  */}

        {/* pass in the username as a prop into the chat component */}
        <Chat userName={user.name} />
      </div>
    )
  );
};

export default Profile;