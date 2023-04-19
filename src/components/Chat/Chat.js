import { CometChat } from "@cometchat-pro/chat"
import { CometChatUsersWithMessages } from "@cometchat-pro/react-ui-kit";

// initialize the Comet Chat
const appID = process.env.REACT_APP_COMETCHAT_APP_ID
const region = process.env.REACT_APP_COMETCHAT_REGION
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization has been completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
)

// now we want to have a create user function 
// const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY
// const uid = "user1"
// const name = "Jonathan"

// let user = new CometChat.User(uid)
// user.setName(name)
// CometChat.createUser(user, authKey).then(
//   user => {
//     console.log("User created", user)
//   }, error => {
//     console.log("Error creating a new user", error)
//   }
// )


// Now we will add a login function
const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY
const uid = "user1" // will eventually be replaced so that it can be any user

CometChat.login(uid, authKey).then(
    user => {
      console.log("Login Successful:", { user });    
    },
    error => {
      console.log("Login failed with exception:", { error });    
    }
  )


function Chat() {
    return (
      <div className="cometchat-container">
        <CometChatUsersWithMessages />
      </div>
    )
}
export default Chat



// ============================= Attempt to link the chat with the user that is logged in the Auth0 will come back to as a stretch goal =========================
// import { CometChat } from "@cometchat-pro/chat";
// import { CometChatUsersWithMessages } from "@cometchat-pro/react-ui-kit";
// // import { useAuth0 } from "@auth0/auth0-react"


// function Chat(props) {
//   // const { logout } = useAuth0()
//   console.log(props.userName)

//   const appID = process.env.REACT_APP_COMETCHAT_APP_ID
//   const region = process.env.REACT_APP_COMETCHAT_REGION
//   const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
//   CometChat.init(appID, appSetting).then(
//     () => {
//       console.log("Initialization has been completed successfully");
//       // You can now call login function.
//     },
//     error => {
//       console.log("Initialization failed with error:", error);
//       // Check the reason for error and take appropriate action.
//     }
//   );

//   const authKey = process.env.REACT_APP_COMETCHAT_AUTH_KEY;

//   // check if the user is already logged in
//   const checkLoggedIn = async () => {
//     try {
//       const user = await CometChat.getLoggedinUser();

//       if (user) {
//         console.log("User already logged in:", user);
//       } else {
//         createUser();
//       }
//     } catch (error) {
//       console.log("Error checking if user is logged in:", error);
//     }
//   };

//   // create a new user function 
//   const createUser = () => {
//     const uid = props.userName;
//     const name = props.userName;

//     let user = new CometChat.User(uid);
//     user.setName(name);

//     CometChat.createUser(user, authKey)
//       .then((user) => {
//         console.log("User created:", user);
//         login(uid);
//       })
//       .catch((error) => {
//         console.log("Error creating a new user:", error);
//       });
//   };

//   // log in the user
//   const login = (uid) => {
//     CometChat.login(uid, authKey)
//       .then((user) => {
//         console.log("Login Successful:", user);
//       })
//       .catch((error) => {
//         console.log("Login failed with exception:", error);
//       });
//   };

//   // // log out the user
//   // const handleLogout = () => {
//   //   CometChat.logout().then(() => {
//   //     console.log("CometChat logout successful");
//   //     logout({ returnTo: window.location.origin });
//   //   }).catch(error => {
//   //     console.log("Error in CometChat logout:", error);
//   //   });
//   // };


//   checkLoggedIn();

//   return (
//     <div className="cometchat-container">
//       <CometChatUsersWithMessages />
//       {/* <button onClick={handleLogout}>Log Out</button> */}
//     </div>
//   );
// }

// export default Chat;





