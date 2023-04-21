import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton
































// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { CometChat } from "@cometchat-pro/chat";

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   const handleLogout = () => {
//     console.log("you reached the handlelogout")
//     CometChat.logout().then(() => {
//       logout({ logoutParams: { returnTo: window.location.origin } });
//     });
//   };

//   return (
//     <button onClick={handleLogout}>
//       Log Out
//     </button>
//   );
// };

// export default LogoutButton;

